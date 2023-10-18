import { useEffect, useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import "./Profile.css";
import Form from "../Forms/Form";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";

const Profile = ({
  handleSignOut,
  status,
  setStatus,
  isLoading,
  handleUpdateUser,
  isEdit,
  setIsEdit,
}) => {
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    return () => {
      setStatus("");
      setIsEdit(false);
    };
  }, [setStatus, setIsEdit]);

  const initialValues = {
    name: currentUser.name || "",
    email: currentUser.email || "",
  };

  const validationRules = {
    name: [
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
    email: [
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
  };

  const { values, handleChange, errors, resetForm } = useFormWithValidation(
    initialValues,
    validationRules
  );

  useEffect(() => {
    if (currentUser) {
      resetForm(
        {
          name: currentUser.name,
          email: currentUser.email,
        },
        {},
        false
      );
    }
  }, [currentUser, resetForm]);

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const handleSubmitSave = (e) => {
    e.preventDefault();
    handleUpdateUser(values.name, values.email);
  };

  return (
    <main>
      <section className="profile">
        <h1 className="profile__welcome">{`Привет, ${
          currentUser.name || "Пользователь"
        }!`}</h1>
        <Form
          className={`profile__form ${isEdit ? "profile__form_type_save" : ""}`}
          name="profile"
          onSubmit={isEdit ? handleSubmitSave : handleSubmitEdit}
        >
          <div className="profile__container-inputs">
            <span className="profile__input-error profile__input-error_type_name">
              {errors.name}
            </span>
            <Input
              classNameInput={`profile__input ${
                errors.name ? "profile__input_type_error" : ""
              }`}
              classNameLabel="profile__label profile__label_type_name"
              type="text"
              name="name"
              placeholder="Имя"
              label="Имя"
              value={values.name || ""}
              disabled={!isEdit}
              onChange={(e) => handleChange(e)}
              min="2"
              max="30"
            />
            <Input
              classNameInput={`profile__input ${
                errors.email ? "profile__input_type_error" : ""
              }`}
              classNameLabel="profile__label profile__label_type_email"
              type="email"
              name="email"
              placeholder="E-mail"
              label="E-mail"
              value={values.email || ""}
              disabled={!isEdit}
              onChange={(e) => handleChange(e)}
            />
            <span className="profile__input-error profile__input-error_type_email">
              {errors.email}
            </span>
          </div>
          <div
            className={`profile__container-btns ${
              isEdit ? "profile__container-btns_type_save" : ""
            }`}
          >
            {isEdit ? (
              <>
                <p className="profile__error">{status}</p>
                <Button
                  className="profile__button profile__button_type_save"
                  type="submit"
                  text="Сохранить"
                  disabled={
                    (errors.name ||
                      errors.email ||
                      (values.name === currentUser.name &&
                        values.email === currentUser.email) ||
                      isLoading) &&
                    true
                  }
                />
              </>
            ) : (
              <>
                <Button
                  className="profile__button profile__button_type_edit"
                  type="submit"
                  text="Редактировать"
                />
                <Button
                  className="profile__button profile__button_type_logout"
                  type="button"
                  text="Выйти из аккаунта"
                  onClick={handleSignOut}
                />
              </>
            )}
          </div>
        </Form>
      </section>
    </main>
  );
};

export default Profile;
