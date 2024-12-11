import React, { useState } from 'react';
import ModalEmpleado from './components/Modal';
import ListadoEmpleados from './components/ListadoEmpleados';
import Entrada from './components/Entrada';
import Swal from 'sweetalert2';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleAgregarEmpleado = (nuevoEmpleado) => {
    axios.post('https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado', nuevoEmpleado)
      .then(response => {
        Swal.fire('Éxito', 'Empleado agregado correctamente', 'success');
        handleClose(); 
      })
      .catch(error => {
        Swal.fire('Error', 'No se pudo agregar el empleado', 'error');
      });
  };

  return (
    <div className="container">
      <h1 className="my-4">Gestión de Empleados</h1>
      <button className="btn btn-success mb-4" onClick={handleShow}>Agregar Empleado</button>
      
      <ListadoEmpleados />

      <ModalEmpleado show={showModal} handleClose={handleClose} onSubmit={handleAgregarEmpleado} />
    </div>
  );
}

export default App;
