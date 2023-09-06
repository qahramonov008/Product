import { Link, Outlet } from "react-router-dom";
import "./Header.scss";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

const Header = () => {
  const {categoryQuantity} = useContext(ProductsContext)

  return (
    <>
      <header className="header">
        <h1 className="header__title">Products Task</h1>
        <div className="header__navs">
          <Link className="header__link" to="/buy">
            Buy Product
          </Link>
          <span className="product__added">Products added to cart: {categoryQuantity}</span>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
