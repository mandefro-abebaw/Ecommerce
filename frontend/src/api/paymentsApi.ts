// src/api/paymentsApi.ts
import axiosClient from "./axiosClient";

export const createPayment = (data: any) =>
    axiosClient.post("/payments/create/", data);

export const getMyPayments = () =>
    axiosClient.get("/payments/my-payments/");
