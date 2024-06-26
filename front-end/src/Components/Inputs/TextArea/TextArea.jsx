import "./TextArea.scss";
const TextArea = ({
  label,
  type = "text",
  value = "",
  onChange,
  className,
  name,
}) => {
  return (
    <div className={`TextArea ${className}`}>
      <label htmlFor={label}>{label}</label>
      <textarea id={label} value={value} onChange={onChange} name={name} />
    </div>
  );
};

export default TextArea;
