import styles from "./Header.module.css"
import { ReactSVG } from 'react-svg';
import regnardDesigners from "../../assets/regnard-designers.svg"
import burger from "../../assets/burgerMenu.svg"
import Navigation from "../Navigation/Navigation";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";
import { useState } from "react";
import Register from "../../pages/Register/Register.jsx";

const Header = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className={styles.header}>
                <ReactSVG src={regnardDesigners} desc='Regnard Designers logo' wrapper="div" className={styles.icon} />
                <div className={styles.desktopNav}>
                    <Navigation />
                </div>

                <button className={styles.button} onClick={() => setIsOpen(true)}>
                    <ReactSVG src={burger} desc='BurgerMenu icon' wrapper="div" className={styles.iconBurger} />
                </button>
                {isOpen && (
                    <ModalWindow onClose={() => setIsOpen(false)} setIsOpen={setIsOpen} />
                )}

                {/* <Register /> */}

            </div>
            {children}
        </div>
    )
}

export default Header