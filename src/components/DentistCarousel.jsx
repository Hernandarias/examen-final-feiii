import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { ThemeContext } from "./ThemeContext";
import "slick-carousel/slick/slick-theme.css";
import { useDentists } from "./DentistsContext";
import "../App.css";


const DentistCarousel = () => {

  const { themeState } = useContext(ThemeContext);
  const darkMode = themeState.isDark;
  const { state, dispatch } = useDentists();

  const isFavorite = (id) => {
    return state.favorites.some((dentist) => dentist.id == id);
  };

  const toggleFavorite = (dentist) => {
    if (isFavorite(dentist.id)) {
      dispatch({ type: "remove_favorite", payload: dentist.id });
    } else {
      dispatch({ type: "add_favorite", payload: dentist });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    arrows: false,
  };

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <h1>Dentistas</h1>
      <Slider {...settings}>
        {state.dentists.map((dentist) => (
          <div key={dentist.id} className={`${darkMode ? "card_dark" : "card_light"}`}>
            <center>
              <h2>{dentist.name}</h2>
              <p>{dentist.email}</p>
              <p>{dentist.phone}</p>
              <img src={`https://api.slingacademy.com/public/sample-photos/${dentist.id}.jpeg`} alt={dentist.name} />
              <br></br>
              <a href={`/dentista/${dentist.id}`}>Detalle</a>
              <button onClick={() => toggleFavorite(dentist)}>
                {isFavorite(dentist.id) ? "Eliminar de favorito" : "Favorito"}
              </button>
            </center>
          </div>
        ))}
      </Slider>
    </div>

  );
};

export default DentistCarousel;
