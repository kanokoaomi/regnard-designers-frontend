import styles from "./MainScreen.module.css"
import { ReactSVG } from 'react-svg';
import regnardDesigners from "../../assets/regnard-designers.svg"

const MainScreen = () => {
    return (
        <div className={styles.container}>
            <div className={styles.picture}></div>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Regnard <span className={styles.blackSpan}>Designers</span></h1>
                <ReactSVG src={regnardDesigners} desc='Regnard Designers logo' wrapper="div" className={styles.icon} />
            </div>
            <h2 className={styles.subTitle}>Jewelry creations</h2>
            <button className={styles.button}>Make an order</button>
        </div>
    )
}

export default MainScreen