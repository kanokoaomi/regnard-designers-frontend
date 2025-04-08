import styles from "./Header.module.css"
import { ReactSVG } from 'react-svg';
import regnardDesigners from "../../assets/regnard-designers.svg"
import Navigation from "../Navigation/Navigation";


const Header = ({ children }) => {
    return (
        <div>
            <div className={styles.header}>
                <ReactSVG src={regnardDesigners} desc='Regnard Designers logo' wrapper="div" className={styles.icon} />
                <Navigation />
            </div>
            {children}
        </div>
    )
}

export default Header