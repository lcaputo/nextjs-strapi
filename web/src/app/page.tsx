import { Card } from "./components/card";
import { Pagination } from "./components/pagination";
import { getGames } from "./services/videogames";

export default async function Home({ searchParams }: { searchParams: any }) {
  const { page } = searchParams;
  const { data: games, pagination } = await getGames({ page: +page });
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {games.map((game: any) => {
        const { id, attributes } = game;
        const { url } = attributes.cover.data.attributes;
        return (
          <Card
            key={id}
            title={attributes.title}
            description={attributes.description}
            imageUrl={url}
            // platforms={game.platforms}
            // releaseDate={game.releaseDate}
          />
        );
      })}
      <Pagination
        page={pagination.page}
        pageSize={pagination.pageSize}
        pageCount={pagination.pageCount}
        total={pagination.total}
      />
    </main>
  )
}
