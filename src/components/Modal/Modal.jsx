
import { useEffect } from "react";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModStyles from "./Modal.module.css";
import ReactDOM from 'react-dom'


const modalsContainer = document.querySelector("#modals");

const Modal = ({ title, onOverlayClick, onEscKeydown, children }) => {

  useEffect(() => {
    document.addEventListener("keydown", onEscKeydown);

    return () => {
      document.removeEventListener("keydown", onEscKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={ModStyles.main}>
        <h3>{title}</h3> 
        {children} 
      </div>
      <ModalOverlay onClick={onOverlayClick} /> 
    </>,
    modalsContainer
  );
};

export default Modal;
