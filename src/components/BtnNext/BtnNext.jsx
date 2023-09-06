import { useContext } from "react";
import "./BtnNext.scss";
import { ProductsContext } from "../../context/ProductsContext";

const BtnNext = () => {
  const { skipped, setSkipped } = useContext(ProductsContext);

  const onClickNext = () => {
    if (skipped !== 80) {
      setSkipped(skipped + 20);
    } else if (skipped === 80) {
      return
    }
  };

  return (
    <>
      <button onClick={onClickNext} className="btn">
        Next
      </button>
    </>
  );
};

export default BtnNext;
