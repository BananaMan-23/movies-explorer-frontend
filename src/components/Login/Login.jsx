import { useEffect } from "react";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Inputs/Input";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import {useAppContext} from "../../contexts/AppContext";
import * as mainApi from "../../utils/MainApi";
import {useNavigate} from "react-router-dom";
import {SERVER_ERROR, SERVER_ERROR_TEXT, UNAUTHORIZED, UNAUTHORIZED_TEXT} from "../../utils/errors";

const Login = () => {
  const navigate = useNavigate();
  const { status, setStatus, isLoading, setIsLoggedIn, setIsLoading,
    setIsStatusPopupOpen, setIsStatus, setTextPopup} = useAppContext();

  const handleLogin = (email, password) => {
    setIsLoading(true);
    mainApi
      .login(email, password)
      .then(() => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        navigate("/movies");
        setIsLoading(false);
        setIsStatusPopupOpen(true);
        setIsStatus(true);
        setTextPopup("Успешный вход в аккаунт. Добро пожаловать!");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(`Возникла ошибка: ${err}`);
        if (err === UNAUTHORIZED) {
          setStatus(UNAUTHORIZED_TEXT);
        } else if (err === SERVER_ERROR) {
          setStatus(SERVER_ERROR_TEXT);
        } else {
          setStatus("При авторизации произошла ошибка.");
        }
      });
  };

  const initialValues = {
    "auth-email": "",
    "auth-password": "",
  };

  const validationRules = {
    "auth-email": [
      {
        regex: /^(?!\s*$).+/,
        message: "Поле обязательно для заполнения",
      },
      {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message:
          "Поле может содержать адрес электронной почты (например, test@test.test)",
      },
    ],
    "auth-password": [
      {
        regex: /^(?!\s*$).+/,
        message: "Поле обязательно для заполнения",
      },
    ],
  };

  const { values, handleChange, errors, isValid } = useFormWithValidation(
    initialValues,
    validationRules
  );

  useEffect(() => {
    return () => {
      setStatus("");
    };
  }, []);

  return (
    <main>
      <AuthForm
        title="Рады видеть!"
        name="auth-log"
        onSubmit={() =>
          handleLogin(values["auth-email"], values["auth-password"])
        }
        textButton="Войти"
        textParagraph="Ещё не зарегистрированы?"
        textLink="Регистрация"
        path="/signup"
        isLoginForm={true}
        isValidLogin={isValid}
        statusLogin={status}
        isLoading={isLoading}
      >
        <Input
          classNameInput={`auth-form__input ${
            errors["auth-email"] && "auth-form__input_type_error"
          }`}
          classNameLabel="auth-form__label"
          type="email"
          name="auth-email"
          placeholder="E-mail"
          required="required"
          label="E-mail"
          value={values["auth-email"]}
          onChange={(e) => handleChange(e)}
        >
          <span className="auth-form__input-error">{errors["auth-email"]}</span>
        </Input>
        <Input
          classNameInput={`auth-form__input ${
            errors["auth-password"] && "auth-form__input_type_error"
          }`}
          classNameLabel="auth-form__label"
          type="password"
          name="auth-password"
          placeholder="Пароль"
          required="required"
          label="Пароль"
          value={values["auth-password"]}
          onChange={(e) => handleChange(e)}
        >
          <span className="auth-form__input-error">
            {errors["auth-password"]}
          </span>
        </Input>
      </AuthForm>
    </main>
  );
};

export default Login;
