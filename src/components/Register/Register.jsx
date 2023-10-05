import AuthForm from "../AuthForm/AuthForm";
import Input from "../Inputs/Input";

const Register = () => {
  const handleRegister = () => {};
  const handleChange = () => {};

  return (
    <AuthForm
      title="Добро пожаловать!"
      name="auth-reg"
      onSubmit={handleRegister}
      textButton="Зарегистрироваться"
      textParagraph="Уже зарегистрированы?"
      textLink="Войти"
      path="/signin"
    >
      <Input
        classNameInput="auth-form__input"
        classNameLabel="auth-form__label"
        type="text"
        name="auth-name"
        placeholder="Имя"
        label="Имя"
        required="required"
        maxLength="30"
        minLength="2"
        defaultValue=""
        onChange={handleChange}
      >
        <span className="auth-form__input-error"></span>
      </Input>
      <Input
        classNameInput="auth-form__input"
        classNameLabel="auth-form__label"
        type="email"
        name="auth-email"
        placeholder="E-mail"
        required="required"
        label="E-mail"
        defaultValue=""
        onChange={handleChange}
      >
        <span className="auth-form__input-error"></span>
      </Input>
      <Input
        classNameInput="auth-form__input auth-form__input_type_error"
        classNameLabel="auth-form__label"
        type="password"
        name="auth-password"
        placeholder="Пароль"
        required="required"
        label="Пароль"
        defaultValue=""
        onChange={handleChange}
      >
        <span className="auth-form__input-error">Что-то пошло не так...</span>
      </Input>
    </AuthForm>
  );
};

export default Register;
