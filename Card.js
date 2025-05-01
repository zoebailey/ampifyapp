import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CustomModal from './Modal';

function CardComponent() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', bodyText: '' });

    const modalData ={
      "Mystery 1": "Owls can turn their heads 270 degrees",
      "Mystery 2": "Our sun is a dwarf star",
      "Mystery 3": "There is enough salt in the ocean to cover all the continents in a foot of salt"
    };

    const handleShow = (title) => {
        setModalContent({ 
          title: title,
          bodyText: modalData[title],
        });
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);

    return (
        <div className="container mt-4">
            <div className="row">
            {["Mystery 1", "Mystery 2", "Mystery 3"].map((title, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img src="/image.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Ooooh you want to click here...</p>
                <button className="btn-primary" onClick={() => handleShow(title)}>
                  Open Modal
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
            <CustomModal
              show={showModal}
              handleClose={handleClose}
              title={modalContent.title}
              bodyText={modalContent.bodyText}
            />
        </div>
        
    );
}

export default CardComponent;