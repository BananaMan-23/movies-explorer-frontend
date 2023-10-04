import AuthForm from "../AuthForm/AuthForm";
import Input from "../Inputs/Input";

const Login = ({ setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleChange = () => {};

  return (
    <AuthForm
      title="Рады видеть!"
      name="auth-log"
      onSubmit={handleLogin}
      textButton="Войти"
      textParagraph="Ещё не зарегистрированы?"
      textLink="Регистрация"
      path="/signup"
      isLoginForm={true}
    >
      <Input
        classNameInput="auth-form__input"
        classNameLabel="auth-form__label"
        type="email"
        name="auth-email"
        placeholder="E-mail"
        required="required"
        label="E-mail"
        defaultValue="pochta@yandex.ru"
        onChange={handleChange}
      >
        <span className="auth-form__input-error"></span>
      </Input>
      <Input
        classNameInput="auth-form__input"
        classNameLabel="auth-form__label"
        type="password"
        name="auth-password"
        placeholder="Пароль"
        required="required"
        label="Пароль"
        defaultValue="123456"
        onChange={handleChange}
      >
        <span className="auth-form__input-error"></span>
      </Input>
    </AuthForm>
  );
};

export default Login;
