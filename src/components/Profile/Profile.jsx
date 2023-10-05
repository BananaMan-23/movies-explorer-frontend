import { useState } from "react";
import "./Profile.css";
import Form from "../Forms/Form";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";

const Profile = ({ setIsLoggedIn }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    setIsEdit(true);
  };

  const handleSubmitSave = (e) => {
    e.preventDefault();
    setIsEdit(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleChange = () => {};

  return (
    <section className="profile">
      <h1 className="profile__welcome">Привет, Андрей!</h1>
      <Form
        className={`profile__form ${isEdit ? "profile__form_type_save" : ""}`}
        name="profile"
        onSubmit={isEdit ? handleSubmitSave : handleSubmitEdit}
      >
        <div className="profile__container-inputs">
          <Input
            classNameInput="profile__input"
            classNameLabel="profile__label profile__label_type_name"
            type="text"
            name="name"
            placeholder="Имя"
            label="Имя"
            defaultValue="Андрей"
            disabled={!isEdit && "disabled"}
            onChange={handleChange}
            min="2"
            max="30"
          />
          <Input
            classNameInput="profile__input"
            classNameLabel="profile__label profile__label_type_email"
            type="email"
            name="email"
            placeholder="E-mail"
            label="E-mail"
            defaultValue="pochta@yandex.ru"
            disabled={!isEdit && "disabled"}
            onChange={handleChange}
          />
        </div>
        <div
          className={`profile__container-btns ${
            isEdit ? "profile__container-btns_type_save" : ""
          }`}
        >
          {isEdit ? (
            <>
              <p className="profile__error"></p>
              <Button
                className="profile__button profile__button_type_save"
                type="submit"
                text="Сохранить"
                disabled={false}
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
                onClick={handleLogout}
              />
            </>
          )}
        </div>
      </Form>
    </section>
  );
};

export default Profile;
