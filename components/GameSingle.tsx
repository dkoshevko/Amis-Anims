import Image from "next/image";
import InfoBubble from "./InfoBubble";

type GameSingleProps = {
  title: string;
  age: string;
  place: string;
  players: string;
  material: string;
  prepTime: string;
  gameTime: string;
  rules: string;
  goal: string;
  advices: string
  imageUrl: string;
  imageAlt: string;
};

export default function GameSingle({
  title,
  age,
  place,
  players,
  material,
  prepTime,
  gameTime,
  rules,
  goal,
  advices,
  imageUrl,
  imageAlt,
}: GameSingleProps) {

  return (
    <div>
      <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${imageUrl}`} alt={imageAlt} width={800} height={100} className="mb-5" />
      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5">
        <InfoBubble info={`Tranches d'âge : ${age}`} />
        <InfoBubble info={`Joueurs : ${players}`} />
        <InfoBubble info={place} />
        <InfoBubble info={`Temps de préparation : ${prepTime}`} />
        <InfoBubble info={`Temps de jeu : ${gameTime}`} />
      </div>
      <div>
        <h4 className="text-xl font-medium mb-2">Matériel :</h4>
        <p className="mb-5">{material}</p>
      </div>
      <h4 className="text-xl font-medium mb-2">Règles du jeu :</h4>
      <p className="text-justify mb-5 whitespace-pre-wrap">{rules}</p>
      <h5 className="text-xl font-medium mb-2">L’objectif du jeu :</h5>
      <p className="mb-5">{goal}</p>
      <h5 className="text-xl font-medium mb-2">Nos conseils :</h5>
      <p className="mb-5">{advices}</p>
    </div>
  );
}
