import Navigation from "../Navigation/Navigation"
import styles from "./ModalPhone.module.css"
import { ReactSVG } from 'react-svg';
// import regnardDesigners from "../../assets/next-button.svg"
import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";

const ModalPhone = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button className={styles.button} onClick={() => setIsOpen(true)}>
                ✅
                {/* <ReactSVG src={regnardDesigners} desc='BurgerMenu icon' wrapper="div" className={styles.iconBurger} /> */}
            </button>
            {isOpen && (
                <ModalWindow setIsOpen={setIsOpen} />
            )}

        </div>
    )
}

export default ModalPhone