import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import "./ProductsContainer.scss";
import Product from "../components/Product/Product";

const ProductsContainer = () => {
  const { data, category } = useContext(ProductsContext);

  if (data === null) return;

  console.log(category)

  const products = data.products;

  console.log(products)

  return (
    <div className="products-container">
      {category === "all"
        ? products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        : products
            .filter((product) => product.category === category)
            .map((product) => <Product key={product.id} product={product} />)}
    </div>
  );
};

export default ProductsContainer;
