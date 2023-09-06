import { useContext } from "react";
import "./Categories.scss";
import { ProductsContext } from "../../context/ProductsContext";
import CategoryItem from "../CategoryItem/CategoryItem";

const Categories = () => {
  const { categories } = useContext(ProductsContext);
  return (
    <div className="categories__container">
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </div>
  );
};

export default Categories;
