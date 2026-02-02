import { useTranslation } from "react-i18next";
import styles from "./LanguageSelector.module.css";
import { languages } from "../../utils/languages";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <label htmlFor="language-selector" className="visually-hidden"></label>
      <select
        id="language-selector"
        className={styles.wrapper}
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option className={styles.text} key={lang.code} value={lang.code}>
            {lang.language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
