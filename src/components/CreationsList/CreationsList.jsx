// import pictures from "../../utils/pictures.js";
import styles from "./CreationsList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Grid, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoading,
  selectPictures,
} from "../../redux/jewellery/jewellerySelectors";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useTranslation } from "react-i18next";
import { SuccessToast } from "../../utils/successToast";
import { ErrorToast } from "../../utils/errorToast";
import { deletePicture } from "../../redux/jewellery/jewelleryOperations";
import { selectIsUserAdmin } from "../../redux/auth/authSelections";
import SlideButtons from "../Buttons/SlideButtons";
import { useNavigate } from "react-router-dom";
import JewelleryPicture from "../JewelleryPicture/JewelleryPicture";
import ModalPicture from "../ModalPicture/ModalPicture";

const CreationsList = ({ onPictureClick }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // to change ammount of rows in swiper by the screen size
  const [gridRows, setGridRows] = useState(2);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const handleResize = () => {
      setGridRows(mediaQuery.matches ? 1 : 2);
    };
    // first run
    handleResize();
    // listening changes
    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const pictures = useSelector(selectPictures);
  const Loading = useSelector(isLoading);
  const isAdmin = useSelector(selectIsUserAdmin);

  // if (Loading) {
  //   return <Loader />;
  //   // return <p>Loading...</p>;
  // }

  const onDeleteButtonClick = async (id) => {
    // console.log(picture);
    try {
      await dispatch(deletePicture(id)).unwrap();
    } catch {
      ErrorToast("Failed to delete picture. Please try again.");
    }
  };

  const navigate = useNavigate();

  const onUpdateButtonClick = (id) => {
    navigate(`/update-picture/${id}`);
  };

  return (
    <div id="creations">
      <h2 className="title">
        {t("section2")} <span className="yellowSpan">{t("section2span")}</span>
      </h2>
      <div className={styles.swiperContainer}>
        <Swiper
          className={styles.swiper}
          modules={[Grid, Pagination, Navigation]}
          direction="horizontal"
          centeredSlides={true}
          // loop={true}
          // loopAddBlankSlides={true}
          rewind={true}
          centeredSlidesBounds={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
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
          {/* {Loading && <Loader />} */}
          {/* <div className="swiper-wrapper"> */}
          {pictures &&
            pictures.length > 0 &&
            pictures.map((picture) => (
              <SwiperSlide key={picture._id} className={styles.swiperSlide}>
                <JewelleryPicture
                  onClick={() => onPictureClick(picture)}
                  picture={picture}
                  isAdmin={isAdmin}
                  onDeleteButtonClick={onDeleteButtonClick}
                  onUpdateButtonClick={onUpdateButtonClick}
                />
              </SwiperSlide>
            ))}
          <SlideButtons />
        </Swiper>
      </div>
    </div>
  );
};

export default CreationsList;
