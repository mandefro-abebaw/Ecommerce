// src/api/ordersApi.ts

import { Order } from "../types/order";
import axiosClient from "./axiosClients";

export const placeOrder = (data: any) =>
    axiosClient.post("/orders/place-order/", data);

export const getMyOrders = () =>
    axiosClient.get<Order[]>("/orders/my-orders/");

export const getOrderDetail = (id: number) =>
    axiosClient.get<Order>(`/orders/order/${id}/`);

export const adminUpdateOrderStatus = (id: number, status: string) =>
    axiosClient.patch(`/orders/admin/order-status/${id}/`, { status });
