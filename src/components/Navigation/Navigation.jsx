import styles from "./Navigation.module.css"
import { Link } from 'react-scroll';

const Navigation = () => {
    return (
        <nav>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <Link spy={true} to="home" smooth={true}>Home</Link>
                </li>
                <li className={styles.link}>
                    <Link to="creations" smooth={true}>Our creations</Link>
                </li>
                <li className={styles.link}>
                    <Link to="about" smooth={true}>About us</Link>
                </li>
                <li className={styles.link}>
                    <Link to="contacts" smooth={true}>Contacts</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navigation