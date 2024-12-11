import React, { useState } from 'react';

const Entrada = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    if (!nombre || !dni || !direccion || !email) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    const nuevoEmpleado = {
      nombre,
      dni,
      direccion,
      email
    };

    onSubmit(nuevoEmpleado);

    // Limpiar los campos después de enviar
    setNombre('');
    setDni('');
    setDireccion('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dni" className="form-label">DNI</label>
        <input
          type="text"
          className="form-control"
          id="dni"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="direccion" className="form-label">Dirección</label>
        <input
          type="text"
          className="form-control"
          id="direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Agregar Empleado</button>
    </form>
  );
};

export default Entrada;
