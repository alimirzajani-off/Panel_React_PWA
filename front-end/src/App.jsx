import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Register" element={<Register />} />
          <Route path="Users" element={<>Users</>} />
          <Route path="Report" element={<>Report</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
