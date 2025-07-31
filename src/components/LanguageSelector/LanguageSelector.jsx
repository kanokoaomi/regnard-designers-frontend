import { useTranslation } from "react-i18next"


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
        {languages.map((lang) => {
            return (
                <button onClick={() => changeLanguage(lang.code)} key={lang.code}>{lang.language}</button>
            )
        })}
    </div>
  )
}

export default LanguageSelector