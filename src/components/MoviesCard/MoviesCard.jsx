import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import Button from "../Buttons/Button";

const MoviesCard = ({ image, title, time, isSave }) => {
  const location = useLocation();
  const handleClick = () => {
    console.log(1);
  };

  return (
    <li
      className={
        location.pathname === "/movies"
          ? "movies__card movies__card_type_unsaved"
          : "movies__card movies__card_type_saved"
      }
    >
      <Link
        className="movies__link"
        to="https://www.youtube.com/watch?v=bHQqvYy5KYo"
        target="_blank"
        rel="noreferrer"
      >
        <img className="movies__img" src={image} alt={title}></img>
      </Link>
      <Button
        className={
          location.pathname === "/saved-movies"
            ? "movies__button-save movies__button-save_type_delete"
            : `movies__button-save ${
                isSave
                  ? "movies__button-save_type_save"
                  : "movies__button-save_type_choose"
              }`
        }
        type="button"
        text={!isSave && "Сохранить"}
        onClick={handleClick}
      />
      <div className="movies__container-title">
        <h2 className="movies__title">{title}</h2>
        <div className="movies__container-time">
          <p className="movies__time">{time}</p>
        </div>
      </div>
    </li>
  );
};

export default MoviesCard;
