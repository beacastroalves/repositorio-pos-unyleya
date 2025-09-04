export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description?: string;
  brand?: string;
  category?: string;
  images?: string[];
  reviews?: string[];
  stock?: number;
}