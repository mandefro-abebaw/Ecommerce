// src/types/order.ts

export interface OrderProduct {
  id: number;
  name: string;
  price: number;
  image: string | null;
}

export interface OrderItem {
  id: number;
  product: OrderProduct;
  quantity: number;
  subtotal: number;
}

export interface Order {
  id: number;
  user: number; // user id
  items: OrderItem[];
  total_items: number;
  total_price: number;
  status: "pending" | "paid" | "shipped" | "delivered" | "cancelled";
  created_at: string; // ISO datetime
}
