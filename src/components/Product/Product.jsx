import { useContext, useState } from "react";
import "./Product.scss";
import { ProductsContext } from "../../context/ProductsContext";

const Product = ({ product }) => {
  const [addedText, setAddedText] = useState('Add to cart')
  const {categoryQuantity,setCategoryQuantity } = useContext(ProductsContext)

  const productProperties = {
    brand: product?.brand,
    image: product?.images?.[0],
    price: product?.price,
    title: product?.title,
    rating: product?.rating,
  };

  const onClickHandler = () => {
    setCategoryQuantity(categoryQuantity + 1)
    setAddedText('Added')
  }

  return (
    <div className="product-card">
      <img
        className="product__image"
        src={productProperties.image}
        alt={productProperties.title}
      />
      <div className="details">
        <h5 className="name">Product name: {productProperties.title}</h5>
        <p className="brand">Brand: {productProperties.brand}</p>
        <p className="price">Price: ${productProperties.price}</p>
        <p className="rating">Rating: {productProperties.rating}</p>
        <button onClick={onClickHandler} className="btn-inline">{addedText}</button>  
      </div>
    </div>
  );
};

export default Product;
