import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

import "./Header.scss";

const Header = () => {
  const handleShowMenu = () => {
    let element = document.getElementsByClassName("H-list")[0];
    element.style.display =
      !element.style.display || element.style.display == "none"
        ? "block"
        : element.style.display == "block"
        ? "none"
        : "none";
  };

  return (
    <div className="Header sticky top-0 bg-slate-50	rounded-b-lg shadow-md p-4">
      <div className="H-menu">
        <div className="HM-icon" onClick={handleShowMenu}>
          <IoMdMenu />
        </div>
        <div className="H-list H-list-show">
          <ul className="flex items-center">
            <li className="HL-item">
              <Link to={"/"}>
                <IoHomeOutline />
              </Link>
            </li>
            <li className="HL-item">
              <Link to={"/Register"}>ثبت نام</Link>
            </li>
            <li className="HL-item">
              <Link to={"/Users"}>لیست افراد</Link>
            </li>
            <li className="HL-item">
              <Link to={"/Report"}>گزارش</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
