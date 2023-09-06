import { createContext, useEffect, useState } from "react";

const filteredCategory = (data) => {
  if (data === null) return;

  const categories = ['all'];

  data.products.map((product) =>
    !categories.includes(product.category)
      ? categories.push(product.category)
      : ""
  );

  return categories;
};

export const ProductsContext = createContext({
  data: null,
  categories: [],
  categoryQuantity: 0,
  setCategoryQuantity: () => Number,
  setSkipped: () => Number,
  skipped: 0,
  category: 'all',
  setCategory: () => String
});

export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [categoryQuantity, setCategoryQuantity] = useState(0)
  const [skipped, setSkipped] = useState(0)
  const [category, setCategory] = useState('all')
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://dummyjson.com/products?limit=20&skip=${skipped}`)
        .then((res) => res.json())
        .then((data) => {
          setCategories(filteredCategory(data));
          setData(data);
        });
    } catch (error) {
      alert(error);
    }
  }, [skipped]);

  const value = {
    data,
    categories,
    categoryQuantity,
    setCategoryQuantity,
    skipped,
    setSkipped,
    category,
    setCategory,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
