import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div className="Layout">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
