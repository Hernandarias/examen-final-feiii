import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext'; 

const Navbar = () => {
  const { themeState, dispatch } = useContext(ThemeContext);

  const changeTheme = () => {
    dispatch({ type: 'change_theme' });
  };
  const darkMode = themeState.isDark; 

  return (
    <nav className={`${darkMode ? "darkNN" : "lightNN"}`}>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/favs">Favs</Link></li>
        <li>
          <button onClick={changeTheme}>Tema</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
