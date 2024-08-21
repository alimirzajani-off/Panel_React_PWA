import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import RegisterNeedy from "./Pages/Register/RegisterNeedy/RegisterNeedy";
import RegisterContributor from "./Pages/Register/RegisterContributor/RegisterContributor";
import Needy from "./Pages/Needy/Needy";
import Contributor from "./Pages/Contributor/Contributor";
import { useEffect } from "react";
import { Login } from "./Pages/Login/Login";

function ProtectedRoute({ element }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return token ? element : null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProtectedRoute element={<Home />} />} />
            <Route
              path="Register-Needy"
              element={<ProtectedRoute element={<RegisterNeedy />} />}
            />
            <Route
              path="Register-Contributor"
              element={<ProtectedRoute element={<RegisterContributor />} />}
            />
            <Route
              path="Needy"
              element={<ProtectedRoute element={<Needy />} />}
            />
            <Route
              path="Contributor"
              element={<ProtectedRoute element={<Contributor />} />}
            />
            <Route
              path="Report"
              element={<ProtectedRoute element={<>Report</>} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
      rtl
        position="bottom-right"
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
