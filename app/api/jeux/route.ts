"use server";

import { NextRequest } from "next/server";
import { query } from "../../config/db";


// export async function GET(request: NextRequest) {
//   const users = await query({
//     query: "SELECT * FROM games",
//     values: [],
//   });

//   let data = JSON.stringify(users);
//   return new Response(data, {
//     status: 200,
//   });
// }

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const queryParam = searchParams.get("query");
  
  if (queryParam) {
    // Si un paramètre de recherche est présent, effectuez la recherche des jeux filtrés par catégorie
    const filteredGames = await searchGamesByCategory(queryParam);
    return new Response(JSON.stringify(filteredGames), { status: 200 });
  } else {
    // Sinon, retournez simplement tous les jeux de la base de données
    const allGames = await getAllGames();
    return new Response(JSON.stringify(allGames), { status: 200 });
  }
}
async function searchGamesByCategory(categoryId: string) {
  try {
    // Exécutez une requête SQL pour sélectionner les jeux filtrés par catégorie
    const queryResult = await query({
      query: "SELECT * FROM games WHERE game_category_id = ?",
      values: [categoryId],
    });

    // Retournez les jeux filtrés
    return queryResult;
  } catch (error) {
    // Gérez les erreurs
    console.error("Une erreur s'est produite lors de la recherche des jeux par catégorie :", error);
    throw new Error("Erreur lors de la récupération des jeux par catégorie");
  }
}
export async function getAllGames() {
  try {
    // Exécutez une requête SQL pour sélectionner tous les jeux
    const queryResult = await query({
      query: "SELECT * FROM games",
      values: [],
    });

    // Retournez tous les jeux
    return queryResult;
  } catch (error) {
    // Gérez les erreurs
    console.error("Une erreur s'est produite lors de la récupération de tous les jeux :", error);
    throw new Error("Erreur lors de la récupération de tous les jeux");
  }
}




export async function POST(request: Request) {
  try {
    const {
      game_title,
      game_category,
      game_category_id,
      game_age,
      game_place,
      game_time,
      game_number_of_children,
      game_preparation_time,
      game_necessary_material,
      game_goal,
      game_advices,
      game_rules,
      game_image_url,
      game_plan_url,
    } = await request.json();
    const addGame: any = await query({
      query:
        "INSERT INTO games (game_title, game_category, game_category_id, game_age, game_place, game_time, game_number_of_children, game_preparation_time, game_necessary_material, game_goal, game_advices, game_rules, game_image_url, game_plan_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      values: [
        game_title,
        game_category,
        game_category_id,
        game_age,
        game_place,
        game_time,
        game_number_of_children,
        game_preparation_time,
        game_necessary_material,
        game_goal,
        game_advices,
        game_rules,
        game_image_url,
        game_plan_url,
      ],
    });
    const result = addGame.affectedRows;
    let message = "";
    if (result) {
      message = "success";
    } else {
      message = "error";
    }
    const game = {
      game_title: game_title,
      game_category: game_category,
      game_category_id: game_category_id,
      game_age: game_age,
      game_place: game_place,
      game_time: game_time,
      game_number_of_children: game_number_of_children,
      game_preparation_time: game_preparation_time,
      game_necessary_material: game_necessary_material,
      game_goal: game_goal,
      game_advices: game_advices,
      game_rules: game_rules,
      game_image_url: game_image_url,
      game_plan_url: game_plan_url,
    };
    return new Response(
      JSON.stringify({
        message: message,
        status: 200,
        game: game,
      })
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 500,
        data: request,
      })
    );
  }
}
