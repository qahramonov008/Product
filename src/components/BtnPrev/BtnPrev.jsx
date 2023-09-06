import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

const BtnPrev = () => {
  const { skipped, setSkipped } = useContext(ProductsContext);

  const onClickNext = () => {
    if (skipped !== 0) {
      setSkipped(skipped - 20);
    } else if (skipped === 0) {
      return
    }
  };

  return (
    <>
      <button onClick={onClickNext} className="btn">
        Prev
      </button>
    </>
  );
};

export default BtnPrev;