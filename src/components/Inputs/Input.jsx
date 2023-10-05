const Input = ({
  type,
  name,
  placeholder,
  children,
  classNameLabel,
  classNameInput,
  label,
  value,
  defaultValue,
  required,
  minLength,
  maxLength,
  disabled,
  tabIndex,
  onChange,
}) => {
  return (
    <label className={classNameLabel} tabIndex={tabIndex}>
      {label}
      <input
        className={classNameInput}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        onChange={onChange}
      />
      {children}
    </label>
  );
};

export default Input;
