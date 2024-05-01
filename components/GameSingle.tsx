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
  advices: string;
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

  const titleFont: string = "text-xl font-medium mb-2 xl:font-semibold";

  // Fonction pour déterminer si un élément doit être affiché en fonction de son contenu
  const shouldDisplay = (content: string): string => {
    return content ? "" : "hidden";
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10">
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${imageUrl}`}
        alt={imageAlt}
        width={800}
        height={100}
        className="mb-5"
      />
      <div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5">
          <InfoBubble info={`Tranches d'âge : ${age}`} />
          <InfoBubble info={`Joueurs : ${players}`} />
          <InfoBubble info={place} />
          <InfoBubble info={`Temps de préparation : ${prepTime}`} />
          <InfoBubble info={`Temps de jeu : ${gameTime}`} />
        </div>
        <div className={shouldDisplay(material)}>
          <h4 className={titleFont}>Matériel :</h4>
          <p className="mb-5">{material}</p>
        </div>
      </div>
      <div>
        <h4 className={titleFont}>Règles du jeu :</h4>
        <p className="text-justify mb-5 whitespace-pre-wrap">{rules}</p>
      </div>
      <div>
        <div className={shouldDisplay(goal)}>
          <h5 className={titleFont}>L’objectif du jeu :</h5>
          <p className="mb-5">{goal}</p>
        </div>
        <div className={shouldDisplay(advices)}>
          <h5 className={titleFont}>Nos conseils :</h5>
          <p className="mb-5">{advices}</p>
        </div>
      </div>
    </div>
  );
}
