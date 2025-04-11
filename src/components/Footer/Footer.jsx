import { ReactSVG } from 'react-svg';
import regnardDesigners from "../../assets/regnard-designers.svg"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.background}>
            <div className={styles.question}>
                <ReactSVG src={regnardDesigners} desc='Regnard Designers logo' wrapper="div" className={styles.icon} />
                <p className={styles.q}>Contact us via e-mail or a call!</p>
            </div>
            <address>
                <a className={styles.link} target="_blank" href="mailto:regnardmaxime@outlook.be">regnardmaxime@outlook.be</a><br />
                <a className={styles.link} href="tel:+32489959819">+ 32489959819</a>
            </address>
        </div>
    )
}

// regnardmaxime@outlook.be
// + 32489959819

export default Footer