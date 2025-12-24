// src/api/analyticsApi.ts
import axiosClient from "./axiosClient";

export const getAnalyticsReports = () =>
    axiosClient.get("/analytics/reports/");

export const generateAnalyticsReport = () =>
    axiosClient.post("/analytics/reports/generate/");
