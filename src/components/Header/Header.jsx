import styles from "./Header.module.css"
import { ReactSVG } from 'react-svg';
import regnardDesigners from "../../assets/regnard-designers.svg"


const Header = ({ children }) => {
    return (
        <div>
            <div className={styles.header}>
                <ReactSVG src={regnardDesigners} desc='Regnard Designers logo' wrapper="div" className={styles.icon} />
                <ul className={styles.links}>
                    <li className={styles.link}>Home</li>
                    <li className={styles.link}>Our creations</li>
                    <li className={styles.link}>Contacts</li>
                </ul>
            </div>
            {children}
        </div>
    )
}

export default Header