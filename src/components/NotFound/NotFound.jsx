import { useNavigate } from "react-router-dom";
import Button from "../Buttons/Button";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="not-found">
      <h1 className="not-found__heading">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <Button className="not-found__button" onClick={goBack} type="button">
        Назад
      </Button>
    </section>
  );
};

export default NotFound;
