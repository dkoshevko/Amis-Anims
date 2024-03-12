"use client";

import { useEffect, useState } from "react";
import GameCategoryCard from "@/components/GameCategoryCard";
import { Game } from "@/common/Game";
import { useQuery } from "@tanstack/react-query";

export default function Jeux() {
  // const [games, setGames] = useState<Game[]>([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch("/api/jeux");
  //       if (!response.ok) {
  //         throw new Error("Erreur lors de la récupération des données");
  //       }
  //       const data = await response.json();
  //       setGames(data);
  //     } catch (error) {
  //       console.error("Erreur:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  const {
    data: games,
    isLoading,
    isError,
    error,
  } = useQuery<Game[]>({
    queryKey: ["games"],
    queryFn: () => fetch("/api/jeux").then((res) => res.json()),
  });

  return (
    <main className="w-full">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col">
          <h2 className="text-2xl mb-3">Jeux</h2>
          {/* map des composant de catégorie */}
          <div className="flex flex-col gap-3">
            {isLoading && <div>Chargement...</div>}
            {isError || error && <div>Il y a une erreur...</div>}
            {games?.map((game) => (
              <GameCategoryCard
                key={game.game_category_id}
                title={game.game_category}
                linkTo={`/jeux/${game.game_category_id}`}
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
