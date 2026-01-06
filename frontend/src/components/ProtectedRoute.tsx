import React from "react";
import { Routes, Route } from "react-router-dom";
// import ProductList from "../pages/ProductList";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";

const ProductRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default ProductRoutes;
