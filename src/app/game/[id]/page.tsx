import { games } from '@/data/games';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface GamePageProps {
  params: {
    id: string;
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const game = games.find((g) => g.id === params.id);
  
  if (!game) {
    notFound();
  }

  const relatedGames = games.filter((g) => game.relatedGames?.includes(g.id));
  const sameCategoryGames = games
    .filter((g) => g.category === game.category && g.id !== game.id)
    .slice(0, 3);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Add structured data here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Game",
            "name": game.title,
            "description": game.description,
            "gamePlatform": "Web",
            "applicationCategory": "Game",
            "image": game.thumbnail,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": game.rating,
              "bestRating": "10",
              "ratingCount": "1000"
            }
          })
        }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Game iframe */}
        <div className="lg:col-span-2">
          <div className="aspect-video w-full bg-black rounded-lg overflow-hidden">
            <iframe
              src={game.url}
              className="w-full h-full"
              allowFullScreen
              title={game.title}
            />
          </div>
        </div>

        {/* Game information */}
        <div className="lg:col-span-1">
          <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
          <div className="mb-4">
            <span className="text-yellow-500 text-xl">★ {game.rating}</span>
            <span className="ml-4 text-gray-600">{game.category}</span>
          </div>
          <p className="text-gray-700 mb-6">{game.description}</p>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {game.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Games */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Related Games</h2>
            <div className="space-y-4">
              {relatedGames.map((relatedGame) => (
                <Link
                  href={`/game/${relatedGame.id}`}
                  key={relatedGame.id}
                  className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold">{relatedGame.title}</h3>
                  <p className="text-sm text-gray-600">{relatedGame.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Same Category Games */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">More {game.category} Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {sameCategoryGames.map((categoryGame) => (
            <Link
              href={`/game/${categoryGame.id}`}
              key={categoryGame.id}
              className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow min-w-0"
            >
              <div className="relative h-48">
                <Image
                  src={categoryGame.thumbnail}
                  alt={categoryGame.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{categoryGame.title}</h3>
                <p className="text-gray-600 mb-2 line-clamp-2">{categoryGame.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{categoryGame.category}</span>
                  <span className="text-yellow-500">★ {categoryGame.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

// Import Metadata type from next
import { Metadata } from 'next';

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = games.find(g => g.id === params.id);
  return {
    title: `${game?.title} - Free Online Game`,
    description: `Play ${game?.title} for free now: ${game?.description}. Game Type: ${game?.category}, Rating: ${game?.rating}/10`,
    openGraph: {
      images: [game?.thumbnail || '/default-og.jpg']
    }
  };
}