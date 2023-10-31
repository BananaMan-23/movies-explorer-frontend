import { Link } from "react-router-dom";
import "./AuthForm.css";
import Form from "../Forms/Form";
import Button from "../Buttons/Button";
import logo from "../../images/pic-logo.svg";

const AuthForm = ({
  title,
  name,
  onSubmit,
  children,
  textButton,
  textLink,
  textParagraph,
  path,
  isLoginForm,
  isValid,
  isValidLogin,
  status,
  statusLogin,
  isLoading,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <section className="auth-form">
      <Link className="auth-form__link auth-form__link_type_logo" to="/">
        <img className="auth-form__logo" src={logo} alt="Логотип"></img>
      </Link>
      <h1 className="auth-form__heading">{title}</h1>
      <Form
        className="auth-form__form"
        onSubmit={(e) => handleSubmit(e)}
        name={name}
      >
        {children}
        <div
          className={`auth-form__container ${
            isLoginForm ? "auth-form__container_type_login" : ""
          }`}
        >
          <p
            className={`auth-form__error ${
              isLoginForm ? "auth-form__error_type_login" : ""
            }`}
          >
            {isLoginForm ? statusLogin : status}
          </p>
          <Button
            className={`auth-form__button ${
              isLoginForm ? "auth-form__button_type_login" : ""
            }`}
            type="submit"
            text={textButton}
            disabled={(isLoginForm ? !isValidLogin : !isValid) || isLoading}
          />
          <p className="auth-form__text">
            {textParagraph}{" "}
            <Link className="auth-form__link" to={path}>
              {textLink}
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default AuthForm;
