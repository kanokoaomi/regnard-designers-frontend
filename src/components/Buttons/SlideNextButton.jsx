import { useSwiper } from "swiper/react";
import { ReactSVG } from "react-svg";
import next from "../../assets/next-button.svg";
import styles from "./Buttons.module.css";

const SlideNextButton = () => {
    const swipe = useSwiper();
    return (
        <>
            <button className={styles.button} onClick={() => swipe.slideNext()}>
                <ReactSVG src={next} desc='Next button' className={styles.icon} wrapper="div" />
            </button>
        </>
    )
}

export default SlideNextButton