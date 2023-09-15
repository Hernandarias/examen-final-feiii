import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import { ThemeContext } from "./ThemeContext";

import withReactContent from 'sweetalert2-react-content';

const ReactSwal = withReactContent(Swal);

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const { themeState } = useContext(ThemeContext);
  const darkMode = themeState.isDark;


  function validateInputs(fullName, email) {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setIsValid(email.match(emailRegex) && fullName.length > 5);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validateInputs(fullName, email);

    if (isValid) {
      ReactSwal.fire('Éxito', `Gracias ${fullName}, te contactaremos cuando antes vía mail`, 'success');
    } else {
      ReactSwal.fire('Error', 'Por favor verifique su información nuevamente', 'error');
    }
  };

  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <br></br>
        <center>
          <div>
            <input
              type="text"
              value={fullName}
              placeholder="Nombre completo"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </center>
        <br></br>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
