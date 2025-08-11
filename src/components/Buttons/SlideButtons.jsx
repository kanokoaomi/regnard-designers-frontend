import { useSwiper } from "swiper/react";
import { ReactSVG } from "react-svg";
import prev from "../../assets/left.svg";
import next from "../../assets/right.svg";
import styles from "./Buttons.module.css";

const SlideButtons = () => {
  const swipe = useSwiper();
  return (
    <div className={styles.buttonsContainer}>
      <button
        aria-label="previous picture"
        className={styles.button}
        onClick={() => swipe.slidePrev()}
      >
        <ReactSVG
          src={prev}
          desc="Prev button"
          className={styles.icon}
          wrapper="div"
        />
        {/* <symbol id="icon-prev" viewBox="0 0 75 32">
                    <path stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" stroke-width="2.6667" d="M72.979 24.773c-18.847-9.434-42.677-8.933-52.236-7.503l-17.843 5.123M2.9 22.392l21.498-20.553M2.9 22.392l31.563 7.871"></path>
                </symbol> */}
      </button>
      <button
        aria-label="next picture"
        className={styles.button}
        onClick={() => swipe.slideNext()}
      >
        <ReactSVG
          src={next}
          desc="Next button"
          className={styles.icon}
          wrapper="div"
        />
      </button>
    </div>
  );
};

export default SlideButtons;
