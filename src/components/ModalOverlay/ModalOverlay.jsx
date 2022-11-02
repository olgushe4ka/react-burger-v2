import modalOverlayStyles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";

export default function ModalOverlay({ closeModal }) {
  return <div className={modalOverlayStyles.overlay} onClick={closeModal} />;
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
