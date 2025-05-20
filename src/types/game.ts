export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  category: string;
  rating: number;
  tags: string[];
  relatedGames?: string[];
} 