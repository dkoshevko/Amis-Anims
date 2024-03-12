"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Game } from "@/common/Game";
import GameCard from "@/components/GameCard";


export default function GamePerCategory() {
  // Récupération du paramètre dans l'URL
  const params = useParams<{ game_category_id: string }>();

  // Appel à l'API
  const {
    data: games,
    isLoading,
    isError,
    error,
  } = useQuery<Game[]>({
    queryKey: ["games"],
    queryFn: () => fetch(`/api/jeux`).then((res) => res.json()),
  });

  // Filtrage des jeux en fonction de l'URL
  const filteredGames = games?.filter(
    (game) => game.game_category_id.toString() == params.game_category_id
  );

  // Récupération du nom de la catégorie à partir du premier jeu filtré
  const categoryName = filteredGames && filteredGames.length > 0 ? filteredGames[0].game_category : "";


  return (
    <main className="w-full">
      <div className="container m-auto px-4 h-full">
        <div className="flex">
          {/* fleche retour */}
          <h3 className="text-xl">{categoryName}</h3>
        </div>
        {/* <div>
        recherche
        parametres
      </div> */}
        {/* map des composants de jeux individuels */}
        <div className="grid grid-cols-2 gap-4">
          {filteredGames?.map((game) => (
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
