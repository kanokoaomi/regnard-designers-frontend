import styles from "./MainScreen.module.css"
import regnardDesigners from "../../assets/regnard-designers.svg"
import togetherImage from "../../images/together.jpg";
import { ReactSVG } from 'react-svg';
import { Link } from 'react-scroll';

const MainScreen = () => {
    return (
        <div id="home" className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className="title"><span className="yellowSpan">Regnar</span>Designers</h1>
                <ReactSVG src={regnardDesigners} desc='Regnard Designers logo' wrapper="div" className={styles.icon} />
            </div>
            <h2 className={styles.subTitle}>Jewellery creations</h2>
            <div className={styles.picture}>
                <img src={togetherImage} alt="photo of Stephan and Maxime together" />
            </div>
            <Link to="contacts" smooth={true} >
                <button className={styles.button}>Make an order</button>
            </Link>
        </div>
    )
}

export default MainScreen