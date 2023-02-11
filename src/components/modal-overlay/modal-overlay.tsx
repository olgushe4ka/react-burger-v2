import modalOverlayStyles from "./modal-overlay.module.css";

type TModalOverlay = {
  closeModal: () => void;
};

export default function ModalOverlay({ closeModal }: TModalOverlay) {
  return <div className={modalOverlayStyles.overlay} onClick={closeModal} />;
}
