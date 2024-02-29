// Interface représentant le schéma des données de jeu
export interface Game {
  game_id: number;
  game_title: string;
  game_category: string;
  game_category_id: number;
  game_age: string;
  game_place: string;
  game_time: string;
  game_number_of_children: string;
  game_preparation_time: string;
  game_necessary_material: string;
  game_goal: string;
  game_advices: string;
  game_rules: string;
  game_image_url: string;
  game_plan_url: string;
}
