import React, { useContext } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"; 
import Home from "./Home";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { ThemeContext } from "./ThemeContext";
import DentistDetail from "./DentistDetail";
import Favorites from "./Favorites";

const AppRoutes = () => {
  const { themeState } = useContext(ThemeContext);
  const darkMode = themeState.isDark;
  return (
    <div className={`${darkMode ? "darkAP" : "lightAP"}`}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/dentista/:id" element={<DentistDetail />} />
          <Route path="/favs" element={<Favorites />} />
        </Routes>

      </Router>
    </div>
  );
};

export default AppRoutes;
