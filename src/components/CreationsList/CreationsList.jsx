// import pictures from "../../utils/pictures.js";
import styles from "./CreationList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules"; // Додали модулі
import "swiper/css";
import "swiper/css/grid"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import { isLoading, selectPictures } from "../../redux/jewellery/jewellerySelectors";
// import swiperConfig from "../../utils/swiper.js";

const CreationsList = () => {

    const pictures = useSelector(selectPictures);
    const Loading = useSelector(isLoading);
    console.log(pictures);

    if (Loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h2 className="title">Discover our <span className="yellowSpan">creations</span></h2>
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
                        {pictures && pictures.length > 0 ? (
                            pictures.map((picture) => (
                                <SwiperSlide key={picture._id || picture.key} className={styles.swiperSlide}>
                                    <img className={styles.picture} src={picture.pictureUrl} alt={picture.name} />
                                </SwiperSlide>
                            ))
                        ) : (
                            <p>No pictures available</p>
                        )}
                    </div>
                </Swiper>
            </>

        </>
    )
}

export default CreationsList