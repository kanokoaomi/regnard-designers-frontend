import Line from "../Line/Line";
import ReadMoreBtn from "../ReadMoreButton/ReadMoreBtn";
import styles from "./AboutUs.module.css";
import StephanPhoto from "../../images/Stephan.jpg";
import MaximePhoto from "../../images/Maxime.jpg";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  const { aboutStephan1, aboutStephan2, aboutStephan3 } = t("aboutStephan");

  return (
    <div id="about">
      <div className={styles.title}>
        <h2 className="title">
          {t("section3")}{" "}
          <span className="yellowSpan">{t("section3span")}</span>
        </h2>
      </div>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.avatar}>
            <img src={MaximePhoto} alt="photo of Maxime" />
          </div>
          <h3 className={styles.name}>Maxime</h3>
          <div className={styles.textWrapper}>
            <h3 className={styles.nameForAdaptive}>Maxime</h3>
            <div>
              <p className={styles.textTwo}>{t("aboutMaxime")}</p>
              <p className={styles.textTwo}>
                <b>Maxime Regnard</b>
              </p>
            </div>
          </div>
        </div>
        <Line />
        <div className={styles.infoContainer}>
          <h3 className={styles.name}>Stephan</h3>
          <div className={styles.avatarTwo}>
            <img src={StephanPhoto} alt="photo of Stephan" />
          </div>
          <div className={styles.textWrapperTwo}>
            <h3 className={styles.nameForAdaptiveTwo}>Stephan</h3>
            <p className={styles.text}>{aboutStephan1}</p>
            <p className={styles.text}>{aboutStephan2}</p>
            <p className={styles.text}>{aboutStephan3}</p>

            <p className={styles.text}>
              <b>Stephan Armand</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
