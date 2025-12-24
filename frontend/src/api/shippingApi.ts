// src/api/shippingApi.ts
import axiosClient from "./axiosClient";
import { ShippingAddress } from "../types/shipping";

/* ---------- List ---------- */
export const getShippingAddresses = () =>
    axiosClient.get<ShippingAddress[]>("/shipping-addresses/");

/* ---------- Create ---------- */
export interface CreateShippingAddressPayload {
    full_name: string;
    phone: string;
    address_line_1: string;
    address_line_2?: string;
    city: string;
    state?: string;
    postal_code?: string;
    country: string;
    is_default?: boolean;
}

export const createShippingAddress = (
    data: CreateShippingAddressPayload
) =>
    axiosClient.post<ShippingAddress>(
        "/shipping-addresses/",
        data
    );

/* ---------- Retrieve ---------- */
export const getShippingAddress = (id: number) =>
    axiosClient.get<ShippingAddress>(
        `/shipping-addresses/${id}/`
    );

/* ---------- Update ---------- */
export const updateShippingAddress = (
    id: number,
    data: Partial<CreateShippingAddressPayload>
) =>
    axiosClient.put<ShippingAddress>(
        `/shipping-addresses/${id}/`,
        data
    );

/* ---------- Partial Update ---------- */
export const patchShippingAddress = (
    id: number,
    data: Partial<CreateShippingAddressPayload>
) =>
    axiosClient.patch<ShippingAddress>(
        `/shipping-addresses/${id}/`,
        data
    );

/* ---------- Delete ---------- */
export const deleteShippingAddress = (id: number) =>
    axiosClient.delete(
        `/shipping-addresses/${id}/`
    );
