import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.css";
import axios from "axios";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div className="productDetails">
      {product ? (
        <div className="product-card">
          <h2>{product.name}</h2>
          <div>
            <p>{product.description}</p>
            <span>{product.price} SEK</span>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductsDetails;
