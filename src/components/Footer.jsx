import React , {useContext} from 'react'
import "../App.css"
import { ThemeContext } from "./ThemeContext";

const Footer = () => {


  const { themeState } = useContext(ThemeContext);
  const darkMode = themeState.isDark; 

  return (
    <footer className={`${darkMode ? "dark" : "light"}`}>
        <p>Examen Final FrontEnd III</p>
    </footer>
  )
}

export default Footer