const ProductItem = ({ image, name, price }) => {
  return (
    <div className="productItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  );
};

export default ProductItem;
