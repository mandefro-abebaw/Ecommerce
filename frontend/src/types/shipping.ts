// src/types/shipping.ts
export interface ShippingAddress {
    id: number;
    full_name: string;
    phone: string;
    address_line_1: string;
    address_line_2?: string;
    city: string;
    state?: string;
    postal_code?: string;
    country: string;
    is_default: boolean;
    created_at: string;
}
