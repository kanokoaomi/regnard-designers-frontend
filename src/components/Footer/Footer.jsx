import { ReactSVG } from "react-svg";
import regnardDesigners from "../../assets/regnard-designers.svg";
// import instagram from "../../assets/instagram.svg"
// import facebook from "../../assets/facebook.svg"
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import styles from "./Footer.module.css";
import Line from "../Line/Line";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id="contacts" className={styles.background}>
      <div className={styles.question}>
        <ReactSVG
          src={regnardDesigners}
          desc="Regnard Designers logo"
          wrapper="div"
          className={styles.icon}
        />
        <p className={styles.q}>{t("contact")}</p>
      </div>
      <address className={styles.address}>
        <a
          className={styles.link}
          target="_blank"
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJvrcNLCRKCsXlVhWKWLWvJxnClwslWBkjXBthRsqZSnfmgtkhnlmJbphWPwPRWDwLpVxxV"
        >
          bijouterieregnard@outlook.be
        </a>
        <br />
        <a className={styles.link} href="tel:+32486414930">
          + 32486414930
        </a>
      </address>
      <Line />
      <div className={styles.social}>
        <p className={styles.qSecond}>{t("orContact")}</p>
        <div className={styles.socialIconsWrapper}>
          <a
            className={styles.a}
            target="_blank"
            href="https://www.instagram.com/regnardesigner/"
          >
            {/* <ReactSVG src={instagram} desc='Instagram icon' wrapper="div" className={styles.socialIcon} /> */}
            <FaSquareInstagram className={styles.socialIcon} />
          </a>
          <a
            className={styles.a}
            target="_blank"
            href="https://www.facebook.com/bijouterieregnard"
          >
            {/* <ReactSVG src={facebook} desc='Facebook icon' wrapper="div" className={styles.socialIcon} /> */}
            <FaFacebookSquare className={styles.socialIcon} />
          </a>
        </div>
        <div className={styles.lngSelect}>
          <p className={styles.lngText}>Language: </p>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

// regnardmaxime@outlook.be
// + 32489959819
// https://www.instagram.com/regnardesigner/
// https://www.facebook.com/bijouterieregnard

export default Footer;
