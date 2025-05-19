import Navigation from "../Navigation/Navigation"
import styles from "./ModalPhone.module.css"
import { ReactSVG } from 'react-svg';
// import regnardDesigners from "../../assets/next-button.svg"
import { useState } from "react";

const ModalPhone = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>
                ✅
                {/* <ReactSVG src={regnardDesigners} desc='BurgerMenu icon' wrapper="div" className={styles.iconBurger} /> */}
            </button>
            {isOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <button className={styles.button} onClick={() => setIsOpen(false)}>❌</button>
                        <Navigation />
                    </div>
                </div>
            )}

        </div>
    )
}

export default ModalPhone