"use server";

import { NextRequest } from "next/server";
import { query } from "../../config/db";


export async function GET(request: NextRequest) {
  const games = await query({
    query: "SELECT * FROM games",
    values: [],
  });

  let data = JSON.stringify(games);
  return new Response(data, {
    status: 200,
  });
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
