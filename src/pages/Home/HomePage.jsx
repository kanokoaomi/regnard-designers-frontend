import Container from "../../components/Container/Container.jsx"
import MainScreen from "../../components/MainScreen/MainScreen.jsx"
import Section from "../../components/Section/Section"
import styles from "./HomePage.module.css"

const HomePage = () => {
    return (
        <Container>
            <div className={styles.mainContainer}>
                <Section>
                    <MainScreen />
                </Section>
            </div>
        </Container>
    )
}

export default HomePage