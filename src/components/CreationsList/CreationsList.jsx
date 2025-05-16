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
import SlidePrevButton from "../Buttons/SlidePrevButton";
import SlideNextButton from "../Buttons/SlideNextButton";
import { useEffect, useState } from "react";

const CreationsList = () => {

    // to change ammount of rows in swiper by the screen size
    const [gridRows, setGridRows] = useState(2);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        const handleResize = () => {
            setGridRows(mediaQuery.matches ? 1 : 2);
        };
        // first run
        handleResize();
        // listening changes
        mediaQuery.addEventListener('change', handleResize);
        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };
    }, []);

    const pictures = useSelector(selectPictures);
    const Loading = useSelector(isLoading);

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
                    centeredSlides={true}
                    // loop={true}
                    loopAddBlankSlides={true}
                    // rewind={true}
                    centeredSlidesBounds={true}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                    }}
                    slidesPerView={gridRows === 1 ? 1 : 3}
                    grid={{
                        rows: gridRows,
                        fill: "row",
                    }}
                    spaceBetween={gridRows === 1 ? 20 : 24}
                    pagination={{
                        type: "progress",
                    }}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true,
                    }}
                    width={1020}
                >

                    {/* <div className="swiper-wrapper"> */}
                    {pictures && pictures.length > 0 && (
                        pictures.map((picture) => (
                            <SwiperSlide key={picture._id} className={styles.swiperSlide}>
                                <div className={styles.pictureContainer}>
                                    <img className={styles.picture} src={picture.pictureUrl} alt={picture.name} />
                                    <p className={styles.text}>{picture.name}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    )}
                    <SlidePrevButton />
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