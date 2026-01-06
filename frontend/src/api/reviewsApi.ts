// src/api/reviewsApi.ts
import axiosClient from "./axiosClients";

export const createReview = (data: any) =>
    axiosClient.post("/reviews/create/", data);

export const getProductReviews = (productId: number) =>
    axiosClient.get(`/reviews/product/${productId}/`);

export const getMyReviews = () =>
    axiosClient.get("/reviews/my-reviews/");

export const getReviewDetail = (id: number) =>
    axiosClient.get(`/reviews/${id}/`);
