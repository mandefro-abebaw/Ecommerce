// src/api/notificationsApi.ts
import axiosClient from "./axiosClients";

export const getNotifications = () =>
    axiosClient.get("/notifications/");

export const markNotificationRead = (id: number) =>
    axiosClient.post(`/notifications/${id}/read/`);

export const markAllNotificationsRead = () =>
    axiosClient.post("/notifications/read-all/");
