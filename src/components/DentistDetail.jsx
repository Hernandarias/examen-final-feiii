import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const ReactSwal = withReactContent(Swal);

const DentistDetail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { themeState } = useContext(ThemeContext);
  const darkMode = themeState.isDark;

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
    })
      .then((response) => {
        setDentist(response.data);
      })
      .catch((error) => {
        ReactSwal.fire('Error', 'Id inválida', 'error');
        console.error("Error de la API:", error);
      });
  }, [id]);

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      {dentist && (
        <div className={`${darkMode ? "card_dark" : "card_light"}`}>
          <h2>Detalles del Dentista</h2>
          <p>Nombre: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Web: {dentist.website}</p>
        </div>
      )}
    </div>
  );
};

export default DentistDetail;
