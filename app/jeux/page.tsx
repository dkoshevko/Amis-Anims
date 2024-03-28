"use client";

import { useEffect, useState } from "react";
import GameCategoryCard from "@/components/GameCategoryCard";
import { Game } from "@/common/Game";
import { useQuery } from "@tanstack/react-query";


export default function Jeux() {
  // Appel à l'API
  const {
    data: games,
    isLoading,
    isError,
    error,
  } = useQuery<Game[]>({
    queryKey: ["games"],
    queryFn: () => fetch("/api/jeux").then((res) => res.json()),
  });

  // Initialiser un objet pour suivre les catégories déjà affichées
  const uniqueCategories: { [key: number]: boolean } = {};


  return (
    <main className="w-full">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col">
          <h2 className="text-2xl mb-3">Jeux</h2>
          {/* Afficher les catégories de jeux uniques */}
          <div className="flex flex-col gap-3">
            {isLoading && <div>Chargement...</div>}
            {isError || error && <div>Il y a une erreur...</div>}
            {games?.map((game) => {
              // Vérifier si la catégorie a déjà été affichée
              if (!uniqueCategories[game.game_category_id]) {
                uniqueCategories[game.game_category_id] = true; // Marquer la catégorie comme déjà affichée
                return (
                  <GameCategoryCard
                    key={game.game_category_id}
                    title={game.game_category}
                    linkTo={`/jeux/${game.game_category_id}`}
                    imageUrl={""}
                    imageAlt={""}
                  />
                );
              }
              return null; // Ne rien afficher si la catégorie a déjà été affichée
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
