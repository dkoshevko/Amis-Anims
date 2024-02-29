"use client";

import GameCategory from "@/components/GameCategory";
import { useEffect, useState } from "react";

// Interface représentant le schéma des données de jeu
interface Game {
  game_title: string;
  game_category: string;
  game_category_id: number;
  game_age: string;
  game_place: string;
  game_time: string;
  game_number_of_children: string;
  game_preparation_time: string;
  game_necessary_material: string;
  game_goal: string;
  game_advices: string;
  game_rules: string;
  game_image_url: string;
  game_plan_url: string;
}

export default function Jeux() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/jeux");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error("Erreur:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="w-full">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col">
          <h2 className="text-2xl">Jeux</h2>
          {/* map components de catégorie */}
          {games.map((game) => (
            <GameCategory
              key={game.game_category_id}
              title={game.game_category}
              linkTo={`/jeux/${game.game_category_id}`}
              imageUrl={""}
              imageAlt={""}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
