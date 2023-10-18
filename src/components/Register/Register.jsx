import { useEffect } from "react";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Inputs/Input";
import useFormWithValidation from "../../hooks/useFormWithValidation";

const Register = ({ handleRegister, status, setStatus, isLoading }) => {
  const initialValues = {
    "auth-name": "",
    "auth-email": "",
    "auth-password": "",
  };

  const validationRules = {
    "auth-name": [
      {
        regex: /^(?!\s*$).+/,
        message: "Поле обязательно для заполнения",
      },
      {
        regex: /^[A-Za-zА-Яа-я\s-]+$/,
        message:
          "Поле может содержать только латиницу, кириллицу, пробел или дефис",
      },
      {
        regex: /^.{2,30}$/,
        message: "Поле должно содержать от 2 до 30 символов",
      },
    ],
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
      {
        regex: /^.{8,}$/,
        message: "Пароль должен содержать как минимум 8 символов",
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
        title="Добро пожаловать!"
        name="auth-reg"
        onSubmit={() =>
          handleRegister(
            values["auth-name"],
            values["auth-email"],
            values["auth-password"]
          )
        }
        textButton="Зарегистрироваться"
        textParagraph="Уже зарегистрированы?"
        textLink="Войти"
        path="/signin"
        isValid={isValid}
        status={status}
        isLoading={isLoading}
      >
        <Input
          classNameInput={`auth-form__input ${
            errors["auth-name"] && "auth-form__input_type_error"
          }`}
          classNameLabel="auth-form__label"
          type="text"
          name="auth-name"
          placeholder="Имя"
          label="Имя"
          required="required"
          maxLength="30"
          minLength="2"
          value={values["auth-name"]}
          onChange={(e) => handleChange(e)}
        >
          <span className="auth-form__input-error">{errors["auth-name"]}</span>
        </Input>
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

export default Register;
