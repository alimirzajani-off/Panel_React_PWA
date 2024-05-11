import "./Input.scss";
const Input = ({ label, type = "text", value = "", name, onChange }) => {
  return (
    <div className="Input">
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
