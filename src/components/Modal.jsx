//React portals

import React from "react";
import ReactDOM from "react-dom";


function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        <button onClick={onClose} style={closeButtonStyles}>
          Bağla
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") 
  );
}


const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const modalContentStyles = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
};

const closeButtonStyles = {
  padding: "10px",
  background: "red",
  color: "white",
  border: "none",
  cursor: "pointer",
};

export default Modal;
