import "./Input.scss";
const Input = ({
  label,
  type = "text",
  value = "",
  name,
  onChange,
  className,
}) => {
  return (
    <div className={`Input ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
