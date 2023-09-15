import React, { createContext, useContext, useReducer } from "react";

const DentistsContext = createContext();

const initial = {
  dentists: [],
  favorites: []
};

const dentistsReducer = (state, action) => {
  switch (action.type) {
    case "set_dentists":
      return { ...state, dentists: action.payload };
    case "add_favorite":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "remove_favorite":
      return { ...state, favorites: state.favorites.filter((fav) => fav.id !== action.payload) };
    default:
      return state;
  }
};

export const DentistsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dentistsReducer, initial);

  return (
    <DentistsContext.Provider value={{ state, dispatch }}>
      {children}
    </DentistsContext.Provider>
  );
};

export const useDentists = () => {
  const context = useContext(DentistsContext);
  return context;
};

export default DentistsContext; 