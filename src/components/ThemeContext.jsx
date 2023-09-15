import React, { createContext, useReducer, useEffect } from "react";

const initial = {
  isDark: localStorage.getItem("theme") === "dark",
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "change_theme":
      const isDark = !state.isDark;
      localStorage.setItem("theme", isDark ? "dark" : "light");
      return { isDark };
    default:
      return state;
  }
};


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatch] = useReducer(themeReducer, initial);

  return (
    <ThemeContext.Provider value={{ themeState, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
