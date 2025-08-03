import Container from "../../components/Container/Container.jsx";
import MainScreen from "../../components/MainScreen/MainScreen.jsx";
import CreationsList from "../../components/CreationsList/CreationsList";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Section/Section";
import Header from "../../components/Header/Header.jsx";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPictures } from "../../redux/jewellery/jewelleryOperations";
import AddPictureButton from "../../components/AddButton/AddPictureButton.jsx";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPictures());
  }, [dispatch]);

  return (
    <div>
      <Header />
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
      <AddPictureButton />
    </div>
  );
};

export default HomePage;
