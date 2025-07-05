import { games } from '@/data/games';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Free Online Games Collection | Best Racing and Arcade Games Recommended</h1>
      <div itemScope itemType="https://schema.org/ItemList" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game, index) => (
          <div itemProp="itemListElement" itemScope itemType="https://schema.org/Game" key={game.id}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
               <a
                  href={`/game/${game.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={game.id}
                  className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                <div className="relative w-full aspect-video">
                  <Image
                    src={game.thumbnail}
                    alt={game.title}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </a>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
                <p className="text-gray-600 mb-2">{game.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{game.category}</span>
                  <span className="text-yellow-500">★ {game.rating}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {game.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
