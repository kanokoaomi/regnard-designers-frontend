import { useSwiper } from "swiper/react";
import { ReactSVG } from "react-svg";
import prev from "../../assets/prev-button.svg";
import next from "../../assets/next-button.svg";
import styles from "./Buttons.module.css";

const SlidePrevButton = () => {
    const swipe = useSwiper();
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.button} onClick={() => swipe.slidePrev()}>
                <ReactSVG src={prev} desc='Prev button' className={styles.icon} wrapper="div" />
            </button>
            <button className={styles.button} onClick={() => swipe.slideNext()}>
                <ReactSVG src={next} desc='Next button' className={styles.icon} wrapper="div" />
            </button>
        </div>
    )
}

export default SlidePrevButton