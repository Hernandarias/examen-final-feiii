import React, { useContext, useState, useEffect } from "react";
import Footer from "./components/Footer";
import AppRoutes from "./components/AppRoutes";
import { ThemeProvider } from './components/ThemeContext';
import { DentistsProvider } from './components/DentistsContext';
import "./App.css"

function App() {

  return (
    <ThemeProvider>
      <DentistsProvider>
        <AppRoutes />
        <Footer />
      </DentistsProvider>
    </ThemeProvider>
  );
}

export default App;