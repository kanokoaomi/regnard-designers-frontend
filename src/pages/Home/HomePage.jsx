import Container from "../../components/Container/Container.jsx"
import MainScreen from "../../components/MainScreen/MainScreen.jsx"
import CreationsList from '../../components/CreationsList/CreationsList'
import AboutUs from "../../components/AboutUs/AboutUs"
import Footer from "../../components/Footer/Footer"
import Section from "../../components/Section/Section"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllPictures } from '../../redux/jewellery/jewelleryOperations';

const HomePage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPictures());
    }, [dispatch]);

    return (
        <div>
            <Container>
                <Section>
                    <MainScreen />
                </Section>
                <Section>
                    <CreationsList />
                </Section>
                <Section>
                    <AboutUs />
                </Section>
            </Container>
            <Footer />
        </div>

    )
}

export default HomePage