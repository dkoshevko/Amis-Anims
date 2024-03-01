"use client";

import { useRef } from "react";

export default function Dashboard() {
  // Déclaration des ref pour les champs de saisie
  const formRef = useRef() as any;
  const gameTitleRef = useRef() as any;
  const gameCategoryRef = useRef() as any;
  const gameCategoryIdRef = useRef() as any;
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
    // Récupération des saisies
    const gameData = {
      game_title: gameTitleRef.current.value.trim(),
      game_category: gameCategoryRef.current.value.trim(),
      game_category_id: gameCategoryIdRef.current.value,
      game_age: gameAgeRef.current.value,
      game_place: gamePlaceRef.current.value,
      game_time: gameTimeRef.current.value,
      game_number_of_children: gameNumberOfChildrenRef.current.value,
      game_preparation_time: gamePreparationTimeRef.current.value,
      game_necessary_material: gameNecessaryMaterialRef.current.value,
      game_goal: gameGoalRef.current.value,
      game_advices: gameAdvicesRef.current.value,
      game_rules: gameRulesRef.current.value,
      game_image_url: gameImageRef.current.value,
      game_plan_url: gamePlanRef.current.value,
    };

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
              <input type="text" ref={gameCategoryRef} />
            </div>
            <div>
              <span>Age :</span>
              <input type="text" ref={gameAgeRef} />
            </div>
            <div>
              <span>Category Id :</span>
              <input type="number" name="" id="" ref={gameCategoryIdRef} />
            </div>
            <div>
              <span>Lieu :</span>
              <input type="text" ref={gamePlaceRef} />
            </div>
            <div>
              <span>Temps de jeu :</span>
              <input type="text" ref={gameTimeRef} />
            </div>
            <div>
              <span>Nombre enfants :</span>
              <input type="text" ref={gameNumberOfChildrenRef} />
            </div>
            <div>
              <span>Temps préparation :</span>
              <input type="text" ref={gamePreparationTimeRef} />
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
