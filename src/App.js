/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  // citas en local storage
  // Prse convierte un arreglo a un string
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [dates, setDates] = React.useState(citasIniciales);
  // Realizar ciertas operaciones cuando el state cambia
  React.useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(dates));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [dates, citasIniciales]);
  // Cita que tome las citas actuales y la nueva
  const crearCita = (cita) => {
    setDates([
      ...dates,
      cita,
    ]);
  };

  // Funcion para eliminar cita
  const eliminarCita = (id) => {
    const citasDelete = dates.filter((cita) => cita.id !== id);
    setDates(citasDelete);
  };

  const titulo = dates.length === 0 ? 'Ingresa una cita ' : 'Administra tus citas';
  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {dates.map((cita) => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>

      </div>

    </>
  );
}

export default App;
