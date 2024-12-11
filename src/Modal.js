import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalEmpleado = ({ show, handleClose, onSubmit }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Empleado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Entrada onSubmit={onSubmit} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEmpleado;
