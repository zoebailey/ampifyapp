import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Modal, Button} from 'react-bootstrap';

function CustomModal({ show, handleClose, title, bodyText, buttonText }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="modal-header">
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-light">{bodyText}</Modal.Body>
            <Modal.Footer className="bg-dark">
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button className = "btn-primary" variant="primary" onClick={handleClose}>
                    {buttonText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomModal;