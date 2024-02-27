import { query } from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";

type handlerTypes = {
  req: NextApiRequest;
  res: NextApiResponse;
};

export default async function handler({ req, res }: handlerTypes) {
  let games;
  let message;

  if (req.method === "GET") {
    const games = await query({
      query: "SELECT * FROM games",
      values: [],
    });

    res.status(200).json({ games: games });
  }
  // if (req.method === "POST") {
  //   const gameTitle = req.body.title;
  //   const addGames = await query({
  //     query: "INSERT INTO games (title) VALUES (?)",
  //     values: [gameTitle],
  //   });
  //   if (addGames.insertId) {
  //     message = "succes";
  //   } else {
  //     message = "error";
  //   }

  //   let game = {
  //     game_id: addGames.insertId,
  //     title: gameTitle,
  //   };

  //   res.status(200).json({ response: { message: message, game: game } });
  // }
}
