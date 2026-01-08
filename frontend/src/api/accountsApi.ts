// src/api/accountsApi.ts
// import {axiosClient} from "./axiosClient";
import axiosClient from "./axiosClients";
import { User } from "../types/user";

/* ---------- Auth ---------- */

export interface RegisterPayload {
    username: string;
    email: string;
    password: string;
    password2: string;
}

export const register = (data: RegisterPayload) =>
    axiosClient.post("/accounts/register/", data);

export interface LoginPayload {
    username: string;
    password: string;
}

export const login = async (data: LoginPayload) => {
    const res = await axiosClient.post("/accounts/login/", data);
    const { access, refresh } = res.data;

    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);

    return res.data;
};

/* ---------- Profile ---------- */

export const getProfile = () =>
    axiosClient.get<User>("/accounts/profile/");

export const updateProfile = (data: FormData) =>
    axiosClient.put<User>("/accounts/profile/", data);

/* ---------- Password ---------- */

export interface ChangePasswordPayload {
    old_password: string;
    new_password: string;
}

export const changePassword = (data: ChangePasswordPayload) =>
    axiosClient.post("/accounts/change-password/", data);

/* ---------- Account ---------- */

export const deleteAccount = () =>
    axiosClient.delete("/accounts/delete-account/");

/* ---------- Bank Info ---------- */

export interface BankInfoPayload {
    bank_name: string;
    account_number: string;
    account_holder: string;
}

export const getBankInfo = () =>
    axiosClient.get("/accounts/bank-info/");

export const updateBankInfo = (data: BankInfoPayload) =>
    axiosClient.post("/accounts/bank-info/", data);
