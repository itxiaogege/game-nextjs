import { Game } from '@/types/game';

export const games: Game[] = [

  {
    id: 'escape-road-2',
    title: 'Escape Road 2',
    description: 'Navigate through challenging roads and escape from obstacles in this exciting sequel.',
    thumbnail: '/images/escape-road-2.webp',
    url: 'https://1games.io/game/escape-road-2',
    category: 'Racing',
    rating: 9.5,
    tags: ['Racing', 'Adventure', '3D'],
    relatedGames: ['escape-road', 'escape-road-city']
  },
  {
    id: 'twisty-roads',
    title: 'Twisty Roads!',
    description: 'Test your driving skills on winding and twisting roads in this challenging game.',
    thumbnail: '/images/twisty-roads.webp',
    url: 'https://g.igroutka.ru/games/1194/cSP0D3apT5GvV4ix/f3421874-42ad-4c74-abcc-f41ec1c2a4e5/index.html',
    category: 'Racing',
    rating: 7.6,
    tags: ['Racing', 'Arcade', '3D'],
    relatedGames: ['winding-road', 'ziggy-road']
  },
  {
    id: 'snow-road-3d',
    title: 'Snow Road 3D',
    description: 'Experience the thrill of driving on snow-covered roads in this 3D racing game.',
    thumbnail: '/images/snow-road-3d.webp',
    url: 'https://1games.io/game/snow-road-3d',
    category: 'Racing',
    rating: 9.3,
    tags: ['Racing', '3D', 'Winter'],
    relatedGames: ['snow-road', 'escape-road-winter']
  },
  {
    id: 'tap-road',
    title: 'Tap Road',
    description: 'Tap to control your vehicle and navigate through challenging road obstacles.',
    thumbnail: '/images/tap-road.webp',
    url: 'https://1games.io/game/tap-road',
    category: 'Arcade',
    rating: 9.1,
    tags: ['Arcade', 'Casual', 'Tap'],
    relatedGames: ['wave-road', 'crossy-road']
  },
  {
    id: 'escape-road-city-2',
    title: 'Escape Road City 2',
    description: 'Navigate through the urban jungle in this exciting city driving adventure.',
    thumbnail: '/images/escape-road-city-2.webp',
    url: 'https://1games.io/game/escape-road-city-2',
    category: 'Racing',
    rating: 9.4,
    tags: ['Racing', 'City', '3D'],
    relatedGames: ['escape-road-city', 'escape-road']
  },
  {
    id: 'wave-road',
    title: 'Wave Road',
    description: 'Ride the waves of the road in this unique driving experience.',
    thumbnail: '/images/wave-road.webp',
    url: 'https://1games.io/game/wave-road',
    category: 'Racing',
    rating: 9.0,
    tags: ['Racing', 'Arcade', 'Wave'],
    relatedGames: ['tap-road', 'crossy-road']
  },
  {
    id: 'crossy-road',
    title: 'Crossy Road',
    description: 'The classic endless runner where you help your character cross the road safely.',
    thumbnail: '/images/crossy-road.webp',
    url: 'https://slope-game.github.io/rungame/crossy-road',
    category: 'Arcade',
    rating: 8.4,
    tags: ['Arcade', 'Endless Runner', 'Casual'],
    relatedGames: ['tap-road', 'wave-road']
  },
  {
    id: 'escape-road-winter',
    title: 'Escape Road Winter',
    description: 'Navigate through snowy landscapes in this winter-themed driving adventure.',
    thumbnail: '/images/escape-road-winter.webp',
    url: 'https://1games.io/game/escape-road-winter',
    category: 'Racing',
    rating: 9.4,
    tags: ['Racing', 'Winter', '3D'],
    relatedGames: ['snow-road-3d', 'escape-road-2']
  },
  {
    id: 'drift-road',
    title: 'Drift Road',
    description: 'Master the art of drifting in this exciting racing game.',
    thumbnail: '/images/drift-road.webp',
    url: 'https://1games.io/game/drift-road',
    category: 'Racing',
    rating: 9.8,
    tags: ['Racing', 'Drifting', '3D'],
    relatedGames: ['dangerous-road', 'crashy-road']
  }
]; 