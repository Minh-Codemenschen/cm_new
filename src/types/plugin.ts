export interface Plugin {
  id: string;
  name: string;
  description: string;
  downloads: number;
  rating: number;
  image: string;
  category: string;
  pricing?: {
    single: number;
    unlimited: number;
  };
}