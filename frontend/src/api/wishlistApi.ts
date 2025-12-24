// src/api/wishlistApi.ts
import axiosClient from "./axiosClient";

export const getWishlist = () =>
    axiosClient.get("/wishlist/");

export const addToWishlist = (productId: number) =>
    axiosClient.post("/wishlist/add/", { product_id: productId });

export const removeFromWishlist = (id: number) =>
    axiosClient.delete(`/wishlist/remove/${id}/`);
