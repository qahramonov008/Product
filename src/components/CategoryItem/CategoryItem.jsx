import { useContext } from "react";
import "./CategoryItem.scss";
import { ProductsContext } from "../../context/ProductsContext";

const CategoryItem = ({ category }) => {
  const { setCategory } = useContext(ProductsContext);

  const onClickCategory = () => {
    setCategory(`${category}`);
  };

  return (
    <div onClick={onClickCategory} className="category">
      {category}
    </div>
  );
};

export default CategoryItem;
