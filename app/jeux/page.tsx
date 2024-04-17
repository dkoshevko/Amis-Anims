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

  // Stocker les chemins d'accès aux images des catégories
  const categoryImages: { [key: number]: string } = {
    0: "/grand_jeu.jpg",
    1: "/petit_jeu.jpg",
    2: "/jeu_de_societe.jpg",
    3: "/activite_manuelle.jpg",
  };

  return (
    <main className="w-full">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-3">Jeux</h2>
          {/* Afficher les catégories de jeux uniques */}
          <div className="flex flex-col gap-3">
            {isLoading && <div>Chargement...</div>}
            {isError || (error && <div>Il y a une erreur...</div>)}
            {games?.map((game) => {
              // Vérifier si la catégorie a déjà été affichée
              if (!uniqueCategories[game.game_category_id]) {
                uniqueCategories[game.game_category_id] = true; // Marquer la catégorie comme déjà affichée
                // Récupérer le chemin d'accès à l'image de la catégorie
                const imageUrl = categoryImages[game.game_category_id] || ""; // Par défaut, une chaîne vide si l'image n'est pas définie
                return (
                  <GameCategoryCard
                    key={game.game_category_id}
                    title={game.game_category}
                    linkTo={`/jeux/${game.game_category_id}`}
                    imageUrl={imageUrl}
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
