import Image from 'next/image';
import Link from 'next/link';
import { Game } from '@/types/game';

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link href={`/game/${game.id}`} className="block border-2 border-red-500" onClick={() => console.log('Game card clicked!')}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={game.thumbnail}
            alt={game.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{game.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{game.description}</p>
        </div>
      </div>
    </Link>
  );
} 