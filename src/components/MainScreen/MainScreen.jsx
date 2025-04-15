import styles from "./MainScreen.module.css"
import { ReactSVG } from 'react-svg';
import regnardDesigners from "../../assets/regnard-designers.svg"

const MainScreen = () => {
    return (
        <div className={styles.container}>
            <div className={styles.picture}></div>
            <div className={styles.titleContainer}>
                <h1 className="title"><span className="yellowSpan">Regnar</span>Designers</h1>
                <ReactSVG src={regnardDesigners} desc='Regnard Designers logo' wrapper="div" className={styles.icon} />
            </div>
            <h2 className={styles.subTitle}>Jewellery creations</h2>
            <button className={styles.button}>Make an order</button>
        </div>
    )
}

export default MainScreen