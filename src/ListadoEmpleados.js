import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ListadoEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    // Obtener la lista de empleados
    axios.get('https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado')
      .then(response => {
        setEmpleados(response.data);
      })
      .catch(error => {
        Swal.fire('Error', 'No se pudo cargar el listado de empleados', 'error');
      });
  }, []);

  return (
    <div className="mt-4">
      <h3>Listado de Empleados</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Dirección</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <tr key={empleado.id}>
              <td>{empleado.nombre}</td>
              <td>{empleado.dni}</td>
              <td>{empleado.direccion}</td>
              <td>{empleado.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoEmpleados;
