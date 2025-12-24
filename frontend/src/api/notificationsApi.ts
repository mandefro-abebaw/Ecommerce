// src/api/notificationsApi.ts
import axiosClient from "./axiosClient";

export const getNotifications = () =>
    axiosClient.get("/notifications/");

export const markNotificationRead = (id: number) =>
    axiosClient.post(`/notifications/${id}/read/`);

export const markAllNotificationsRead = () =>
    axiosClient.post("/notifications/read-all/");
