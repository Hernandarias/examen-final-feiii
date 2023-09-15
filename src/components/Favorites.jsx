import React from "react";
import { useDentists } from "./DentistsContext";
import FavoriteDentistCarousel from "./FavoriteDentistCarousel";

const Favorites = () => {
  return (
    <div>
      <h1>Favoritos</h1>
      <FavoriteDentistCarousel />
    </div>
  );
};

export default Favorites;
