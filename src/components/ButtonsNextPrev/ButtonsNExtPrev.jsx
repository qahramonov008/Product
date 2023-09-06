import BtnNext from '../BtnNext/BtnNext';
import BtnPrev from '../BtnPrev/BtnPrev';
import './Buttons.scss'

const ButtonsNextPrev = () => {
  return <div className="btns-container">
    <BtnPrev />
    <BtnNext />
  </div>;
};

export default ButtonsNextPrev;
