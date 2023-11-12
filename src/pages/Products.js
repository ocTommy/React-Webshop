import ProductItem from "../components/ProductItem";
import "../styles/Products.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="products">
      <h1 className="productsTitle">Our Products</h1>
      <div className="productsList">
        {products.map((product) => (
          <ProductItem
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
