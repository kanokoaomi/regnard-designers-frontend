// import pictures from "../../utils/pictures.js";
import styles from "./CreationsList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
import { isLoading, selectPictures } from "../../redux/jewellery/jewellerySelectors";
// import SlidePrevButton from "../Buttons/SlidePrevButton";
// import SlideNextButton from "../Buttons/SlideNextButton";

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
            <div className={styles.swiperContainer}>
                <Swiper className={styles.swiper}
                    modules={[Grid, Pagination, Navigation]}
                    direction="horizontal"
                    slidesPerView={3}
                    grid={{
                        rows: 2,
                        fill: "row",
                    }}
                    spaceBetween={24}
                    // loop={true}
                    navigation={true}
                    // navigation={{
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // }}
                    pagination={{
                        type: "progress",
                    }}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true,
                    }}
                    width={1020}
                >

                    {/* <SlidePrevButton /> */}
                    {/* <div className="swiper-wrapper"> */}
                    {pictures && pictures.length > 0 && (
                        pictures.map((picture) => (
                            <SwiperSlide key={picture._id} className={styles.swiperSlide}>
                                <img className={styles.picture} src={picture.pictureUrl} alt={picture.name} />
                            </SwiperSlide>
                        ))
                    )}
                    {/* <SlideNextButton /> */}
                    {/* <div className="prev-arrow" onClick={handlePrev} />
                    <div className="next-arrow" onClick={handleNext} /> */}

                </Swiper>
            </div>

        </>
    )
}

// : (
//     <p>No pictures available</p>
// )

export default CreationsList