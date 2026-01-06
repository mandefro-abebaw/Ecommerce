// src/types/cart.ts

export interface CartProduct {
  id: number;
  name: string;
  price: number;
  image: string | null;
}

export interface CartItem {
  id: number;
  product: CartProduct;
  quantity: number;
  subtotal: number;
}

export interface Cart {
  id: number;
  user: number; // user id
  items: CartItem[];
  total_items: number;
  total_price: number;
}
