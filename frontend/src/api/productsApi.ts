// src/api/productsApi.ts
import axiosClient from "./axiosClients";
import { Product } from "../types/product";

export const getProducts = () =>
    axiosClient.get<Product[]>("/products/");

export const getProductBySlug = (slug: string) =>
    axiosClient.get<Product>(`/products/${slug}/`);
