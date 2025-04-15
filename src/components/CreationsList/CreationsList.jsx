// import pictures from "../../utils/pictures.js";
import styles from "./CreationsList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules"; // Додали модулі
import "swiper/css";
import "swiper/css/grid"
import "swiper/css/navigation";
import "swiper/css/pagination";
// import 'swiper/css/virtual';
import { useSelector } from "react-redux";
import { isLoading, selectPictures } from "../../redux/jewellery/jewellerySelectors";


const CreationsList = () => {

    const pictures = useSelector(selectPictures);
    const Loading = useSelector(isLoading);

    console.log("Loading:", Loading);
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
                    {/* <div className="swiper-wrapper"> */}
                    {pictures && pictures.length > 0 && (
                        pictures.map((picture) => (
                            <SwiperSlide key={picture._id} className={styles.swiperSlide}>
                                <img className={styles.picture} src={picture.pictureUrl} alt={picture.name} />
                            </SwiperSlide>
                        ))
                    )}
                    {/* </div> */}
                </Swiper>
            </>

        </>
    )
}

// : (
//     <p>No pictures available</p>
// )

export default CreationsList