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
    <div className="Header sticky top-0 flex items-center justify-between bg-slate-50	rounded-b-lg shadow-md p-4">
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
            <li className="HL-item relative Register">
              <p>ثبت نام</p>
              <div className="HLI-content Register-dropdown hidden min-w-40 absolute bg-[#ffffff] rounded shadow-md top-6">
                <Link to={"/Register-Needy"}>ثبت نام نیازمند</Link>
                <br />
                <Link to={"/Register-Contributor"}>ثبت نام خیّر</Link>
              </div>
            </li>
            <li className="HL-item">
              <Link to={"/Needy"}>لیست خانواده های نیازمند</Link>
            </li>
            <li className="HL-item">
              <Link to={"/Contributor"}>لیست خیّرین</Link>
            </li>
            <li className="HL-item">
              <Link to={"/Report"}>گزارش</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="H-logo">
        <img
          loading="lazy"
          src="src/assets/image/logo.jpg"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default Header;
