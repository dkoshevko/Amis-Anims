"use client";

import { useEffect, useState } from "react";
import GameCategoryCard from "@/components/GameCategoryCard";
import { Game } from "@/common/Game";

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
          <h2 className="text-2xl mb-3">Jeux</h2>
          {/* map des composant de catégorie */}
          <div className="flex flex-col gap-3">
            {games.map((game) => (
              <GameCategoryCard
                key={game.game_category_id}
                title={game.game_category}
                linkTo={`/jeux/categorie/${game.game_category_id}`}
                imageUrl={""}
                imageAlt={""}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
