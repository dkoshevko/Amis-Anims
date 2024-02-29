"use client";

import { useEffect, useState } from "react";
import GameCard from "@/components/GameCard";
import { Game } from "@/common/Game";
import { useSearchParams } from "next/navigation";

export default function GamePerCategory() {
  const [games, setGames] = useState<Game[]>([]);

  // const searchParams = useSearchParams();
  // const game_category_id = searchParams.get("game_category_id");

  // const filteredGames = games.filter(game => game.game_category_id === game_category_id);

  // console.log(game_category_id);
  

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
      <div className="container m-auto px-4 h-full">
        <div className="flex">
          {/* fleche retour */}
          <h3 className="text-xl">Petits jeux</h3>
        </div>
        {/* <div>
        recherche
        parametres
      </div> */}
        {/* map des composants de jeux individuels */}
        <div className="grid grid-cols-2 gap-4">
          {games.map((game) => (
            <GameCard
              key={game.game_category_id}
              title={game.game_title}
              linkTo={`/jeux/${game.game_id}`}
              imageUrl={game.game_image_url}
              imageAlt={game.game_title}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
