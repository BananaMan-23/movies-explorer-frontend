import "./InfoTooltip.css";
import imageSrcErr from "../../images/icon-error.svg";
import imageSrcOk from "../../images/icon-ok.svg";
import {useAppContext} from "../../contexts/AppContext";

const InfoTooltip = () => {
  const { textPopup, isStatus, isStatusPopupOpen, setIsStatusPopupOpen } = useAppContext();
  const closeStatusPopup = () => {
    setIsStatusPopupOpen(false);
  };
  return (
    <div className={`popup ${isStatusPopupOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__exit-button"
          type="button"
          onClick={closeStatusPopup}
        ></button>
        <div className="popup__wrapper">
          <img
            className="popup__image"
            src={isStatus ? imageSrcOk : imageSrcErr}
            alt={isStatus ? "Успешно" : "Ошибка"}
          />
          <h2 className="popup__label">{textPopup}</h2>
        </div>
      </div>
    </div>
  );
};

export default InfoTooltip;
