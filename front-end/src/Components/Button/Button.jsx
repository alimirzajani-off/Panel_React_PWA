const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button className={`Button rounded p-2 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
