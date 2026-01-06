import React, { useEffect, useState } from "react";
import { Product } from "../types/product";
// import { getProducts } from "../api/productApi";
import { getProducts } from "../api/productsApi";
import { Link } from "react-router-dom";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data); 
      })
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  return (

    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
