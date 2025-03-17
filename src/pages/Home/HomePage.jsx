import MainScreen from "../../components/MainScreen.jsx/MainScreen"
import Section from "../../components/Section/Section"
import styles from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div className={styles.mainContainer}>
            <Section>
                <MainScreen />
            </Section>
        </div>
    )
}

export default HomePage