import { useTranslation } from "react-i18next";
import styles from "./Navigation.module.css"
import { Link } from 'react-scroll';

const Navigation = () => {

    const { t } = useTranslation()
    const {home, creations, about, contacts} = t("links")

    return (
        <nav>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <Link spy={true} to="home" smooth={true}>{home}</Link>
                </li>
                <li className={styles.link}>
                    <Link to="creations" smooth={true}>{creations}</Link>
                </li>
                <li className={styles.link}>
                    <Link to="about" smooth={true}>{about}</Link>
                </li>
                <li className={styles.link}>
                    <Link to="contacts" smooth={true}>{contacts}</Link>
                </li>
            </ul>
        </nav >
    )
}

export default Navigation