// src/types/product.ts

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string | null;

  // relations
  category?: number | string; // id or name (depends on backend)
  created_at?: string;
  updated_at?: string;
}
