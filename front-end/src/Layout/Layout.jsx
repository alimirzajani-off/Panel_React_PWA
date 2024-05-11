import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <div className="body my-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
