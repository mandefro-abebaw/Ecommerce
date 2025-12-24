import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/accounts/";
const PRODUCT_URL = "http://127.0.0.1:8000/api/products/";
const CART_URL = "http://127.0.0.1:8000/api/cart/";
const ORDER_URL = "http://127.0.0.1:8000/api/orders/";
const WISHLIST_URL = "http://127.0.0.1:8000/api/wishlist/";
const SHIPPING_URL = "http://127.0.0.1:8000/api/shipping/";


// -------------------- AUTH --------------------
export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}login/`, {
    email,
    password,
  });

  const { access, refresh } = response.data;


  localStorage.setItem("access", access);
  localStorage.setItem("refresh", refresh);

  return response.data;
};


export const register = async (data: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_URL}register/`, data);
  return response.data;
};


export const logout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};


export const getProfile = async () => {
  const token = localStorage.getItem("access");

  if (!token) {
    throw new Error("No access token found");
  }

  const response = await axios.get(`${API_URL}profile/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};



// -------------------- PRODUCTS APP --------------------
export const getProducts = () =>
  axios.get(`${PRODUCT_URL}products/`);

export const getProductDetail = (slug: string) =>
  axios.get(`${PRODUCT_URL}products/${slug}/`);

export const searchProducts = (query: string) =>
  axios.get(`${PRODUCT_URL}search/?q=${query}`);



// -------------------- CART APP --------------------
export const getCart = () => {
  const access = localStorage.getItem("access");
  return axios.get(`${CART_URL}`, {
    headers: { Authorization: `Bearer ${access}` },
  });
};

export const addToCart = (productId: number, quantity: number) => {
  const access = localStorage.getItem("access");
  return axios.post(
    `${CART_URL}add/`,
    { product_id: productId, quantity },
    { headers: { Authorization: `Bearer ${access}` } }
  );
};

export const removeFromCart = (itemId: number) => {
  const access = localStorage.getItem("access");
  return axios.delete(`${CART_URL}remove/${itemId}/`, {
    headers: { Authorization: `Bearer ${access}` },
  });
};



// -------------------- WISHLIST APP --------------------
export const getWishlist = () => {
  const access = localStorage.getItem("access");
  return axios.get(`${WISHLIST_URL}`, {
    headers: { Authorization: `Bearer ${access}` },
  });
};

export const addToWishlist = (productId: number) => {
  const access = localStorage.getItem("access");
  return axios.post(
    `${WISHLIST_URL}add/`,
    { product_id: productId },
    { headers: { Authorization: `Bearer ${access}` } }
  );
};

export const removeFromWishlist = (productId: number) => {
  const access = localStorage.getItem("access");
  return axios.delete(`${WISHLIST_URL}remove/${productId}/`, {
    headers: { Authorization: `Bearer ${access}` },
  });
};



// -------------------- ORDER APP --------------------
export const createOrder = () => {
  const access = localStorage.getItem("access");
  return axios.post(
    `${ORDER_URL}create/`,
    {},
    { headers: { Authorization: `Bearer ${access}` } }
  );
};

export const getOrders = () => {
  const access = localStorage.getItem("access");
  return axios.get(`${ORDER_URL}`, {
    headers: { Authorization: `Bearer ${access}` },
  });
};

export const getOrderDetail = (orderId: number) => {
  const access = localStorage.getItem("access");
  return axios.get(`${ORDER_URL}${orderId}/`, {
    headers: { Authorization: `Bearer ${access}` },
  });
};



// -------------------- SHIPPING APP --------------------
export const getShippingAddress = () => {
  const access = localStorage.getItem("access");
  return axios.get(`${SHIPPING_URL}`, {
    headers: { Authorization: `Bearer ${access}` },
  });
};

export const updateShippingAddress = (data: {
  full_name: string;
  phone: string;
  city: string;
  region: string;
  zone: string;
  woreda: string;
  kebele: string;
}) => {
  const access = localStorage.getItem("access");
  return axios.put(`${SHIPPING_URL}update/`, data, {
    headers: { Authorization: `Bearer ${access}` },
  });
};
