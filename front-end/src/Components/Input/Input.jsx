import "./Input.scss";
const Input = ({ label, type = "text", value = "" }) => {
  return (
    <div className="Input">
      <label for={label}>{label}</label>
      <input id={label} type={type} value={value} />
    </div>
  );
};

export default Input;
