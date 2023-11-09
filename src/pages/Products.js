import { ProductsList } from "../helpers/ProductsList";
import ProductItem from "../components/ProductItem";
import "../styles/Products.css";

const Products = () => {
  return (
    <div className="products">
      <h1 className="productsTitle">Our Products</h1>
      <div className="productsList">
        {ProductsList.map((item, key) => {
          return (
            <ProductItem
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
