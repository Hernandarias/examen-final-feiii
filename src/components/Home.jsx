import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import DentistCarousel from "./DentistCarousel";
import { useDentists } from "./DentistsContext";

const Home = () => {
  const { themeState } = useContext(ThemeContext);
  const darkMode = themeState.isDark;
  const { state, dispatch } = useDentists();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "set_dentists", payload: data });
      })
      .catch((error) => {
        console.error("Error de la API:", error);
      });
  }, [dispatch]);

  return (
    <div>
      <DentistCarousel dentists={state.dentists} />
    </div>
  );
};

export default Home;
