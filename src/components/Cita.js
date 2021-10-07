/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => (
  <div className="cita">
    <p>
      Mascota:
      {' '}
      <span>{cita.mascota}</span>
    </p>
    <p>
      Dueño:
      {' '}
      <span>{cita.dueño}</span>
    </p>
    <p>
      Fecha:
      {' '}
      <span>{cita.fecha}</span>
    </p>
    <p>
      Hora:
      {' '}
      <span>{cita.hora}</span>
    </p>
    <p>
      Dueño:
      {' '}
      <span>{cita.dueño}</span>
    </p>
    <p>
      Sintomas:
      {' '}
      <span>{cita.sintomas}</span>
    </p>
    <button
      type="submit"
      onClick={() => eliminarCita(cita.id)}
      className="button eliminar u-full-width"
    >
      Eliminar &times;
    </button>
  </div>
);

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};

export default Cita;
