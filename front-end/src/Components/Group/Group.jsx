import { useState } from "react";
import "./Group.scss";
const Group = ({ title, children, className, onClick, ...props }) => {
  const [collapse, setcollapse] = useState(true);
  const handleTitleClick = (e) => {
    setcollapse(!collapse);
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <div className={`Group bg-white rounded-t-lg shadow-md mx-4 mt-2`}>
      <div
        className="G-title rounded-t-lg py-2 px-4"
        onClick={handleTitleClick}
      >
        {title}
      </div>
      {collapse && <div className={`G-body p-4 ${className}`}>{children}</div>}
    </div>
  );
};

export default Group;
