import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: { "Content-Type": "application/json" },
});

/* ===========================================================
   AUTH / ACCOUNTS
=========================================================== */
export const registerUser = (data: { first_name: string; last_name: string; email: string; password: string }) =>
  API.post("/accounts/register/", data);

export const loginUser = (data: { email: string; password: string }) =>
  API.post("/accounts/login/", data);

export const getUserProfile = () =>
  API.get("/accounts/profile/");

export const updateUserProfile = (data: any) =>
  API.patch("/accounts/profile/update/", data);

/* ===========================================================
   PRODUCTS
=========================================================== */
export const getProducts = () => API.get("/products/products/");

export const getProductDetail = (slug: string) =>
  API.get(`/products/products/${slug}/`);

export const searchProducts = (query: string) =>
  API.get(`/products/search/?q=${query}`);

/* ===========================================================
   CART
=========================================================== */
export const getCart = () => API.get("/cart/");

export const addToCart = (data: { product: number; quantity: number }) =>
  API.post("/cart/add/", data);

export const updateCartItem = (id: number, quantity: number) =>
  API.patch(`/cart/update/${id}/`, { quantity });

export const removeCartItem = (id: number) =>
  API.delete(`/cart/remove/${id}/`);

/* ===========================================================
   WISHLIST
=========================================================== */
export const getWishlist = () => API.get("/wishlist/");

export const addToWishlist = (productId: number) =>
  API.post("/wishlist/add/", { product: productId });

export const removeFromWishlist = (productId: number) =>
  API.delete(`/wishlist/remove/${productId}/`);

/* ===========================================================
   ORDERS
=========================================================== */
export const placeOrder = (data: any) =>
  API.post("/orders/place/", data);

export const getUserOrders = () =>
  API.get("/orders/my-orders/");

export const getOrderDetail = (id: number) =>
  API.get(`/orders/${id}/`);

/* ===========================================================
   SHIPPING
=========================================================== */
export const addShippingAddress = (data: any) =>
  API.post("/shipping/add/", data);

export const getShippingAddresses = () =>
  API.get("/shipping/");

export const updateShippingAddress = (id: number, data: any) =>
  API.patch(`/shipping/update/${id}/`, data);

export const deleteShippingAddress = (id: number) =>
  API.delete(`/shipping/delete/${id}/`);

/* ===========================================================
   REVIEWS
=========================================================== */
export const createReview = (data: any) =>
  API.post("/reviews/add/", data);

export const getProductReviews = (productId: number) =>
  API.get(`/reviews/product/${productId}/`);

export const deleteReview = (id: number) =>
  API.delete(`/reviews/delete/${id}/`);

/* ===========================================================
   NOTIFICATIONS
=========================================================== */
export const getNotifications = () =>
  API.get("/notifications/");

export const markNotificationRead = (id: number) =>
  API.patch(`/notifications/read/${id}/`);

export const deleteNotification = (id: number) =>
  API.delete(`/notifications/delete/${id}/`);

/* ===========================================================
   PAYMENTS
=========================================================== */
export const createPaymentIntent = (orderId: number) =>
  API.post("/payments/create-intent/", { order_id: orderId });

export const verifyPayment = (data: any) =>
  API.post("/payments/verify/", data);

/* ===========================================================
   ANALYTICS
=========================================================== */
export const getAnalyticsOverview = () =>
  API.get("/analytics/overview/");

export const getSalesReport = () =>
  API.get("/analytics/sales-report/");

export const getTopProducts = () =>
  API.get("/analytics/top-products/");

export default API;
