import React from "react";
import "./Modal.scss";
import { BsXLg, BsFillCheckCircleFill } from "react-icons/bs";

function Modal({ children, openModal, setOpenModal }) {
  return (
    <>
      {openModal && (
        <div className="overlay">
          <div className="modal-container">
            <BsXLg
              className="icon-close"
              onClick={() => {
                setOpenModal(false);
              }}
            />
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export { Modal };
