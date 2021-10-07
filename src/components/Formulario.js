/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({ crearCita }) => {
  const [cita, setCita] = React.useState({
    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  const [error, setError] = React.useState(false);

  const onChange = (e) => {
    e.preventDefault();
    console.log('name', e.target.name);
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  const {
    mascota, dueño, fecha, hora, sintomas,
  } = cita;

  // Funcion para ennviar datos
  const onSubmit = (e) => {
    e.preventDefault();
    // Validar
    if (mascota.trim() === '' || dueño.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      setError(true);
      return;
    }
    console.log(cita);
    // Eliminar mensaje
    setError(false);
    // Asignar ID
    cita.id = uuid();
    // Crear Cita
    crearCita(cita);
    // Reiniciar el form
    setCita({
      mascota: '',
      dueño: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
  };

  return (
    <>
      <h2>Crear Cita</h2>
      {error ? (<p className="alerta-error"> Todos los campos son obligatorios</p>) : null}
      <form onSubmit={onSubmit}>
        {/* Input para el nombre de la mascota */}
        <label htmlFor="mascota"> Nombre Mascota:</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={onChange}
          value={mascota}

        />
        {/* Input para el nombre del propietario */}
        <label htmlFor="dueño"> Nombre del dueño :</label>
        <input
          type="text"
          name="dueño"
          className="u-full-width"
          placeholder="Nombre del dueño"
          onChange={onChange}
          value={dueño}
        />
        {/* Input para la fecha */}
        <label htmlFor="fecha"> Fecha:</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={onChange}
          value={fecha}
        />
        {/* Input para la hora */}
        <label htmlFor="hora"> Hora:</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={onChange}
          value={hora}
        />
        {/* Input para los sintomas */}
        <label htmlFor="sintomas"> Sintomas:</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={onChange}
          value={sintomas}
        />
        <button
          type="sumbit"
          className="u-full-width  button-primary"
        >
          Agregar cita
        </button>

      </form>
    </>
  );
};
Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};
export default Formulario;
