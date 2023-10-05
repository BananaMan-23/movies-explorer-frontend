import "./SearchForm.css";
import Input from "../Inputs/Input";
import Form from "../Forms/Form";
import Button from "../Buttons/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
  const handleSubmitSearch = () => {};
  const handleChangeSearch = () => {};

  return (
    <section className="search" aria-label="поиск фильмов">
      <Form
        className="search__form"
        name="search-form"
        onSubmit={handleSubmitSearch}
      >
        <div className="search__form-container">
          <div className="search__form-container-input">
            <div className="search__icon-search"></div>
            <Input
              classNameLabel="search__label"
              classNameInput="search__input"
              type="search"
              name="search-input"
              placeholder="Фильм"
              required="required"
              onChange={handleChangeSearch}
            />
            <Button className="search__button" type="submit" text="Найти" />
          </div>
          <div className="search__checkbox-filter">
            <FilterCheckbox />
            <p className="search__checkbox-title">Короткометражки</p>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default SearchForm;
