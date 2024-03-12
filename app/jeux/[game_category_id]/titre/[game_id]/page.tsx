"use client";

import { Game } from "@/common/Game";
import GameSingle from "@/components/GameSingle";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function GamePage() {
  // Récupération du paramètre dans l'URL
  const params = useParams<{ game_id: string }>();

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

  // Filtrage du jeu en fonction de l'URL
  const filteredGame = games?.filter(
    (game) => game.game_id.toString() == params.game_id
  );

  // Récupération du nom du jeu séléctionné à partir du premier jeu filtré
  const gameName =
    filteredGame && filteredGame.length > 0
      ? filteredGame[0].game_title
      : "";

  return (
    <main className="w-full">
      <div className="container m-auto px-4 h-full">
        <div className="flex mb-5">
          {/* fleche retour */}
          <h3 className="text-2xl font-semibold">{gameName}</h3>
        </div>
        {/* map des composants de jeux individuels */}
        <div>
          {filteredGame?.map((game) => (
            <GameSingle
              key={game.game_id}
              title={game.game_title}
              age={game.game_age}
              place={game.game_place}
              players={game.game_number_of_children}
              material={game.game_necessary_material}
              prepTime={game.game_preparation_time}
              gameTime={game.game_time}
              rules={game.game_rules}
              goal={game.game_goal}
              advices={game.game_advices}
              imageUrl={game.game_image_url}
              imageAlt={game.game_title}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
