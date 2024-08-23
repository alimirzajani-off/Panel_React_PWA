import "./Input.scss";
const Input = ({
  label,
  type = "text",
  value = "",
  name,
  style,
  onChange,
  className,
  placeholder,
  inputClassName,
}) => {
  console.log(style);

  return (
    <div className={`Input ${className}`} style={style}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className={`${inputClassName}`}
      />
    </div>
  );
};

export default Input;
