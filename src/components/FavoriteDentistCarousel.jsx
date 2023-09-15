import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { ThemeContext } from "./ThemeContext";
import { useDentists } from "./DentistsContext";
import "../App.css";

const FavoriteDentistCarousel = () => {
  const { themeState } = useContext(ThemeContext);
  const darkMode = themeState.isDark;
  const { state } = useDentists();

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

  const favoriteDentists = state.dentists.filter((dentist) =>
    state.favorites.some((fav) => fav.id === dentist.id)
  );

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <Slider {...settings}>
        {favoriteDentists.map((dentist) => (
          <div key={dentist.id} className={`${darkMode ? "card_dark" : "card_light"}`}>
            <center>
              <h2>{dentist.name}</h2>
              <p>{dentist.email}</p>
              <p>{dentist.phone}</p>
              <img src={`https://api.slingacademy.com/public/sample-photos/${dentist.id}.jpeg`} alt={dentist.name} />
            </center>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FavoriteDentistCarousel;
