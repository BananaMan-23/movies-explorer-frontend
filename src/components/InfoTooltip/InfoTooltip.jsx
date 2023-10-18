import "./InfoTooltip.css";
import imageSrcErr from "../../images/icon-error.svg";
import imageSrcOk from "../../images/icon-ok.svg";

const InfoTooltip = ({ isOpen, onClose, isStatus, status }) => {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__exit-button"
          type="button"
          onClick={onClose}
        ></button>
        <div className="popup__wrapper">
          <img
            className="popup__image"
            src={isStatus ? imageSrcOk : imageSrcErr}
            alt={isStatus ? "Успешно" : "Ошибка"}
          />
          <h2 className="popup__label">{status}</h2>
        </div>
      </div>
    </div>
  );
};

export default InfoTooltip;
