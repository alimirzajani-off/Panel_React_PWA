import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import RegisterNeedy from "./Pages/Register/RegisterNeedy/RegisterNeedy";
import RegisterContributor from "./Pages/Register/RegisterContributor/RegisterContributor";
import Needy from "./Pages/Needy/Needy";
import Contributor from "./Pages/Contributor/Contributor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Register-Needy" element={<RegisterNeedy />} />
          <Route
            path="Register-Contributor"
            element={<RegisterContributor />}
          />
          <Route path="Needy" element={<Needy />} />
          <Route path="Contributor" element={<Contributor />} />
          <Route path="Report" element={<>Report</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
