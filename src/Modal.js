import React, { useState } from "react";

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="add-btn " onClick={toggleModal}>Add Income / Expense</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
