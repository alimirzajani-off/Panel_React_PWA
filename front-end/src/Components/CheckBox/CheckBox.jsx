import "./CheckBox.scss";
const Checkbox = ({
  items = [],
  title,
  className,
  onChange,
  value,
  name,
  ...props
}) => {
  return (
    <div className={`CheckBox ${className} flex flex-wrap`}>
      <div className="C-title">
        <h4>{title}</h4>
      </div>
      <div className="C-options flex flex-wrap">
        {items.map((item, index) => (
          <div key={index} className="C-option ml-2">
            <input
              type="checkbox"
              id={item.value}
              value={item.value}
              name={name}
              checked={value[item?.value] || false}
              onChange={onChange}
            />
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;
