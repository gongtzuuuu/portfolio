import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
