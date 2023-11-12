import { Link } from "react-router-dom";
const ProductItem = ({ id, image, name, price }) => {
  return (
    <div className="productItem">
      <Link to={`/products/${id}`}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="productImage"
        ></div>
        <h3>{name}</h3>
        <p>{price} SEK</p>
      </Link>
    </div>
  );
};

export default ProductItem;
