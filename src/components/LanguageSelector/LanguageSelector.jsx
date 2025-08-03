import { useTranslation } from "react-i18next"
import styles from "./LanguageSelector.module.css"

const languages = [
    {code: "en", language: "English",},
    {code: "fr", language: "French",},
    {code: "nl", language: "Dutch",},
]


const LanguageSelector = () => {

    const {i18n} = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

return (
    <div>
        <select
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

export default LanguageSelector