"use client";

import { OPTIMIZED_FONT_PROVIDERS } from "next/dist/shared/lib/constants";
import { useRef } from "react";

// const IMAGE_URL = "https://amis-anims.fr/images/";

export default function Dashboard() {
  // Déclaration des ref pour les champs de saisie
  const formRef = useRef() as any;
  const gameTitleRef = useRef() as any;
  const gameCategoryRef = useRef() as any;
  const gameAgeRef = useRef() as any;
  const gamePlaceRef = useRef() as any;
  const gameTimeRef = useRef() as any;
  const gameNumberOfChildrenRef = useRef() as any;
  const gamePreparationTimeRef = useRef() as any;
  const gameNecessaryMaterialRef = useRef() as any;
  const gameImageRef = useRef() as any;
  const gamePlanRef = useRef() as any;
  const gameGoalRef = useRef() as any;
  const gameAdvicesRef = useRef() as any;
  const gameRulesRef = useRef() as any;

  // Fonction pour ajouter des jeux à la base de données
  async function addGame() {
    // Mapping des noms de catégorie aux IDs associés
    const categoryIds: { [key: string]: number } = {
      "Grand jeu": 0,
      "Petit jeu": 1,
      "Jeu de société": 2,
    };

    // Récupération de la valeur sélectionnée dans le sélecteur de catégorie
    const selectedCategory = gameCategoryRef.current.value;
    // Récupération de l'ID associé à la catégorie sélectionnée
    const selectedCategoryId = categoryIds[selectedCategory];

    // Récupération du nom de fichier de l'image
    const imageFile = gameImageRef.current.files[0];
    const imageFileName = imageFile ? imageFile.name : "";

    // Formation de l'URL complète de l'image
    const imageUrl = imageFileName
      ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${imageFileName}`
      : "";

    // Récupération du nom de fichier du plan
    const planFile = gamePlanRef.current.files[0];
    const planFileName = planFile ? planFile.name : "";

    // Formation de l'URL complète du plan
    const planUrl = planFileName
      ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${planFileName}`
      : "";

    // Récupération des saisies
    const gameData = {
      game_title: gameTitleRef.current.value.trim(),
      game_category: selectedCategory,
      game_category_id: selectedCategoryId,
      game_age: gameAgeRef.current.value,
      game_place: gamePlaceRef.current.value,
      game_time: gameTimeRef.current.value,
      game_number_of_children: gameNumberOfChildrenRef.current.value,
      game_preparation_time: gamePreparationTimeRef.current.value,
      game_necessary_material: gameNecessaryMaterialRef.current.value,
      game_goal: gameGoalRef.current.value,
      game_advices: gameAdvicesRef.current.value,
      game_rules: gameRulesRef.current.value,
      game_image_url: imageUrl,
      game_plan_url: planUrl,
    };

    // Envoi vers la base de données
    try {
      const response = await fetch("/api/jeux", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameData),
      });

      if (response.ok) {
        alert("Jeu ajouté avec succès !");
        formRef.current.reset(); // Réinitialiser le formulaire après l'ajout réussi du jeu
      } else {
        throw new Error("Erreur lors de l'ajout du jeu");
      }
    } catch (error) {
      console.error("Erreur :", error);
      alert("Une erreur s'est produite lors de l'ajout du jeu.");
    }
  }

  return (
    <main className="flex justify-center items-center my-28">
      <div className="w-1/2 border rounded border-black bg-slate-300 p-5">
        <h6 className="text-xl font-semibold mb-5">Ajouter des jeux</h6>
        <form ref={formRef}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <span>Title :</span>
              <input type="text" ref={gameTitleRef} />
            </div>
            <div>
              <span>Category :</span>
              <select name="" id="" ref={gameCategoryRef}>
                <option value="Grand jeu">Grand jeu</option>
                <option value="Petit jeu">Petit jeu</option>
                <option value="Jeu de société">Jeu de société</option>
              </select>
            </div>
            <div>
              <span>Age :</span>
              <input type="text" ref={gameAgeRef} />
            </div>
            <div>
              <span>Lieu :</span>
              <select name="" id="" ref={gamePlaceRef}>
                <option value="Intérieur">Intérieur</option>
                <option value="Extérieur">Extérieur</option>
                <option value="Intérieur/Extérieur">Intérieur/Extérieur</option>
              </select>
            </div>
            <div>
              <span>Temps de jeu :</span>
              <select name="" id="" ref={gameTimeRef}>
                <option value="15-30min">15-30min</option>
                <option value="30-45min">30-45min</option>
                <option value="45min - 1h">45min - 1h</option>
                <option value="+1h">+1h</option>
                <option value="fil rouge">&quot;fil rouge&quot;</option>
              </select>
            </div>
            <div>
              <span>Nombre enfants :</span>
              <select name="" id="" ref={gameNumberOfChildrenRef}>
                <option value="6+">6+</option>
                <option value="8+">8+</option>
                <option value="12+">12+</option>
                <option value="20+">20+</option>
                <option value="30+">30+</option>
              </select>
            </div>
            <div>
              <span>Temps préparation :</span>
              <select name="" id="" ref={gamePreparationTimeRef}>
                <option value="5-10min">5-10min</option>
                <option value="10-30min">10-30min</option>
                <option value="30min - 1h">30min - 1h</option>
                <option value="+1h">+1h</option>
              </select>
            </div>
            <div>
              <span>Matériel nécessaire :</span>
              <input type="text" ref={gameNecessaryMaterialRef} />
            </div>
            <div>
              <span>Objectif :</span>
              <input type="text" ref={gameGoalRef} />
            </div>
            <div>
              <span>Image :</span>
              <input type="file" name="" id="" ref={gameImageRef} />
            </div>
            <div>
              <span>Schéma :</span>
              <input type="file" name="" id="" ref={gamePlanRef} />
            </div>
            <div>
              <span>Conseils :</span>
              <input type="text" ref={gameAdvicesRef} />
            </div>
            <div>
              <div>Règles :</div>
              <textarea
                name=""
                id=""
                ref={gameRulesRef}
                className="w-full h-32"
              ></textarea>
            </div>
          </div>
        </form>
        <div>
          <input
            type="button"
            value="Ajouter un jeu"
            onClick={addGame}
            className="px-4 py-2 bg-blue-400 rounded-lg mt-5 cursor-pointer active:scale-95"
          />
        </div>
      </div>
    </main>
  );
}
