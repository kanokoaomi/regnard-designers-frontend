import styles from "./Header.module.css"
import { ReactSVG } from 'react-svg';
import regnardDesigners from "../../assets/regnard-designers.svg"
import Navigation from "../Navigation/Navigation";
import ModalPhone from "../ModalPhone/ModalPhone";


const Header = ({ children }) => {


    return (
        <div>
            <div className={styles.header}>
                <ReactSVG src={regnardDesigners} desc='Regnard Designers logo' wrapper="div" className={styles.icon} />
                <Navigation />
                <ModalPhone />
            </div>
            {children}
        </div>
    )
}

export default Header