import "./FilterCheckbox.css";
import Input from "../Inputs/Input";

const FilterCheckbox = () => {
  const handleChange = () => {};

  return (
    <Input
      classNameLabel="search__label-switch"
      classNameInput="search__input-checkbox"
      type="checkbox"
      name="search-checkbox"
      tabIndex="0"
      onChange={handleChange}
    >
      <span className="search__slider"></span>
    </Input>
  );
};

export default FilterCheckbox;
