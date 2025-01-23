import React from "react";
import ReactDOM from 'react-dom';
import './modal.css'
import { TodoAppContext } from "../../Context/TodoAppContext";

function Modal({children}){
    const { closeModal } = React.useContext(TodoAppContext)
    return ReactDOM.createPortal(
        <div className="modal-overlay">
        <div className="modal">
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
          <div className="modal-content">           
            {children}
          </div>
        </div>
      </div>
        , document.getElementById('modal'))
}

export { Modal }