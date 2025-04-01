import pictures from "../../utils/pictures.js";
import styles from "./CreationList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules"; // Додали модулі
import "swiper/css";
import "swiper/css/grid"
import "swiper/css/navigation";
import "swiper/css/pagination";
// import swiperConfig from "../../utils/swiper.js";

const CreationsList = () => {
    return (
        <>
            <h2 className={styles.title}>Discover our <span className={styles.yellowSpan}>creations</span></h2>
            <>
                <Swiper className={styles.swiper}
                    modules={[Grid, Pagination, Navigation]}
                    direction="horizontal"
                    slidesPerView={3}
                    grid={{
                        rows: 2,
                        fill: "row",
                    }}
                    spaceBetween={64}
                    // loop={true}
                    navigation={true}
                    pagination={{
                        type: "progress",
                    }}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true,
                    }}
                >
                    <div className="swiper-wrapper">
                        {
                            pictures.map((picture) => {
                                return (

                                    <SwiperSlide key={picture.key} className={styles.swiperSlide}>
                                        <div className={styles.picture}>{picture.value}</div>
                                        {/* <div className={styles.picture}>{picture.value}</div>
                                    <div className={styles.picture}>{picture.value}</div>
                                    <div className={styles.picture}>{picture.value}</div>
                                    <div className={styles.picture}>{picture.value}</div>
                                    <div className={styles.picture}>{picture.value}</div> */}
                                    </SwiperSlide>

                                )
                            })
                        }
                    </div>
                </Swiper>
            </>

        </>
    )
}

export default CreationsList