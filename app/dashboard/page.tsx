"use client";

import { useRef } from "react";

export default function Dashboard() {
  const gameTitleRef = useRef() as any;
  const gameCategoryRef = useRef() as any;
  const gameCategoryIdRef = useRef() as any;
  const gameAgeRef = useRef() as any;
  const gamePlaceRef = useRef() as any;
  const gameNumberOfChildrenRef = useRef() as any;
  const gamePreparationTimeRef = useRef() as any;
  const gameNecessaryMaterialRef = useRef() as any;
  const gameImageRef = useRef() as any;
  const gamePlanRef = useRef() as any;
  const gameGoalRef = useRef() as any;
  const gameAdvicesRef = useRef() as any;
  const gameRulesRef = useRef() as any;

  async function addGame() {
    const gameTitle = gameTitleRef.current.value.trim();
    const gameCategory = gameCategoryRef.current.value.trim();
    const gameCategoryId = gameCategoryRef.current.value;
    const gameAge = gameAgeRef.current.value;
    const gamePlace = gamePlaceRef.current.value;
    const gameNumberOfChildren = gameNumberOfChildrenRef.current.value;
    const gamePreparationTime = gamePreparationTimeRef.current.value;
    const gameNecessaryMaterial = gameNecessaryMaterialRef.current.value;
    const gameGoal = gameGoalRef.current.value;
    const gameAdvices = gameAdvicesRef.current.value;
    const gameRules = gameRulesRef.current.value;
    const gameImage = gameImageRef.current.value;
    const gamePlan = gamePlanRef.current.value;

    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: gameTitle,
        category: gameCategory,
        category_id: gameCategoryId,
        age: gameAge,
        place: gamePlace,
        number_of_children: gameNumberOfChildren,
        preparation_time: gamePreparationTime,
        necessary_material: gameNecessaryMaterial,
        goal: gameGoal,
        advices: gameAdvices,
        rules: gameRules,
        image: gameImage,
        plan: gamePlan,
      }),
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/jeux`,
      postData
    );

    const response = await res.json();

    alert("Jeux ajouté avec succès !")
  }

  return (
    <main className="flex justify-center items-center my-28">
      <div className="w-1/2 border rounded border-black bg-slate-300 p-5">
        <h6 className="text-xl font-semibold mb-5">Ajouter des jeux</h6>
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
            <span>Image :</span>
            <input type="file" name="" id="" ref={gameImageRef} />
          </div>
          <div>
            <span>Schéma :</span>
            <input type="file" name="" id="" ref={gamePlanRef} />
          </div>
          <div>
            <span>Objectif :</span>
            <input type="text" ref={gameGoalRef} />
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
