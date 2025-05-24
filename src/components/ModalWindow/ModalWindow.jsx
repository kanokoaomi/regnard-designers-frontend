import Navigation from "../Navigation/Navigation"
import styles from "./ModalWindow.module.css"

const ModalWindow = ({ setIsOpen }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.button} onClick={() => setIsOpen(false)}>❌</button>
        <Navigation />
      </div>
    </div>
  )
}

export default ModalWindow