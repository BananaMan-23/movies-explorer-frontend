import "./FilterCheckbox.css";
import Input from "../Inputs/Input";

const FilterCheckbox = ({ isChecked, setCheckbox, name }) => {
  return (
    <Input
      classNameLabel="search__label-switch"
      classNameInput="search__input-checkbox"
      type="checkbox"
      name={name}
      tabIndex="0"
      checked={isChecked}
      onChange={(e) => setCheckbox(e.target.checked)}
    >
      <span className="search__slider"></span>
    </Input>
  );
};

export default FilterCheckbox;
