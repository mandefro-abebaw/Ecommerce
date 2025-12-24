// src/api/cartApi.ts
import axiosClient from "./axiosClient";
import { Cart } from "../types/cart";

export const getCart = () =>
    axiosClient.get<Cart>("/carts/");

export const addToCart = (productId: number, quantity = 1) =>
    axiosClient.post("/carts/add/", {
        product_id: productId,
        quantity,
    });

export const updateCartItem = (id: number, quantity: number) =>
    axiosClient.put(`/carts/update/${id}/`, { quantity });

export const removeCartItem = (id: number) =>
    axiosClient.delete(`/carts/remove/${id}/`);
