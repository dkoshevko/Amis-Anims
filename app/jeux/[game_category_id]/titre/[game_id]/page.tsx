export default function GamePage({
  params,
}: {
  params: {
    game_title: string;
    game_category: string;
  };
}) {
  return (
    <main>
      <div>
        <h1>{params.game_title}</h1>
      </div>
    </main>
  );
}
