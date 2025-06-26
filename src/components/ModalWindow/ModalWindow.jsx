import Navigation from "../Navigation/Navigation"
import NavLinks from "../NavLinks/NavLinks"
import styles from "./ModalWindow.module.css"

const ModalWindow = ({ onClose }) => {
  return (
    <div onClick={onClose} className={styles.modalOverlay}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <button className={styles.button} onClick={onClose}>❌</button>
        <Navigation />
        <NavLinks />
      </div>
    </div>
  )
}

export default ModalWindow