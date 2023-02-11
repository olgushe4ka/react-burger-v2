import { useEffect } from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import ModStyles from "./modal.module.css";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalsContainer: any = document.querySelector("#modals");

type TModal = {
  readonly title?: string;
  readonly closeAllModals: () => void;
  readonly children: React.ReactNode;
};

const Modal = ({ title, closeAllModals, children }: TModal) => {
  const handleEscKeydown = (e: KeyboardEvent) => {
    e.key === "Escape" && closeAllModals();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscKeydown);

    return () => {
      document.removeEventListener("keydown", handleEscKeydown);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={ModStyles.main}>
        <button className={`${ModStyles.closeIcon}`} onClick={closeAllModals}>
          <CloseIcon type="primary" />
        </button>
        <h2
          className={`${ModStyles.title} text text_type_main-large pl-10 pr-10 pb-1 pt-10`}
        >
          {title}
        </h2>

        {children}
      </div>
      <ModalOverlay closeModal={closeAllModals} />
    </>,
    modalsContainer
  );
};

export default Modal;
