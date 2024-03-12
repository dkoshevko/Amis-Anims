"use client";

import { useEffect, useState } from "react";
import GameCard from "@/components/GameCard";
import { Game } from "@/common/Game";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function GamePerCategory() {
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

  const params = useParams();  

  const {
    data: games,
    isLoading,
    isError,
    error,
  } = useQuery<Game[]>({
    queryKey: ["games", params],
    queryFn: () => fetch(`/api/jeux/${params}`).then((res) => res.json()),
  });

  return (
    <main className="w-full">
      <div className="container m-auto px-4 h-full">
        <div className="flex">
          {/* fleche retour */}
          <h3 className="text-xl">{games?.filter((game) => game.game_category_id == params)}</h3>
        </div>
        {/* <div>
        recherche
        parametres
      </div> */}
        {/* map des composants de jeux individuels */}
        <div className="grid grid-cols-2 gap-4">
          {games?.map((game) => (
            <GameCard
              key={game.game_category_id}
              title={game.game_title}
              linkTo={`/jeux/titre/${game.game_id}`}
              imageUrl={game.game_image_url}
              imageAlt={game.game_title}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
