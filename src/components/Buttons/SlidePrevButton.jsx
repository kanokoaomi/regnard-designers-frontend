import { useSwiper } from "swiper/react";
import { ReactSVG } from "react-svg";
import prev from "../../assets/prev-button.svg";
import styles from "./Buttons.module.css";

const SlidePrevButton = () => {
    const swipe = useSwiper();
    return (
        <>
            <button className={styles.button} onClick={() => swipe.slidePrev()}>
                <ReactSVG src={prev} desc='Prev button' className={styles.icon} wrapper="div" />
            </button>
        </>
    )
}

export default SlidePrevButton