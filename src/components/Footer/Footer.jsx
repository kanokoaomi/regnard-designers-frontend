import { ReactSVG } from 'react-svg';
import regnardDesigners from "../../assets/regnard-designers.svg"
import instagram from "../../assets/instagram.svg"
import facebook from "../../assets/facebook.svg"

import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.background}>
            <div className={styles.question}>
                <ReactSVG src={regnardDesigners} desc='Regnard Designers logo' wrapper="div" className={styles.icon} />
                <p className={styles.q}>Contact us via e-mail or a call!</p>
            </div>
            <address>
                <a className={styles.link} target="_blank" href="mailto:bijouterieregnard@outlook.be">bijouterieregnard@outlook.be</a><br />
                <a className={styles.link} href="tel:+32486414930">+ 32486414930</a>
            </address>
            <div className={styles.social}>
                <p className={styles.q}>Click on the buttons to find us in social media:</p>
                <a target="_blank" href="https://www.instagram.com/regnardesigner/">
                    <ReactSVG src={instagram} desc='Instagram icon' wrapper="div" className={styles.socialIcon} />
                </a>
                <a target="_blank" href="https://www.facebook.com/bijouterieregnard">
                    <ReactSVG src={facebook} desc='Facebook icon' wrapper="div" className={styles.socialIcon} />
                </a>
            </div>
        </div>
    )
}

// regnardmaxime@outlook.be
// + 32489959819
// https://www.instagram.com/regnardesigner/
// https://www.facebook.com/bijouterieregnard

export default Footer