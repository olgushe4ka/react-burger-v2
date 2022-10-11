import modalOverlayStyles from "./ModalOverlay.module.css";

export default function ModalOverlay({ closeModal }) {
  // пропс onClick - это колбэк для клика по подложке, который закрывает модальное окно
  return <div className={modalOverlayStyles.overlay} onClick={closeModal} />;
}
