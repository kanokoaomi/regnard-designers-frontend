import Container from "../../components/Container/Container.jsx";
import MainScreen from "../../components/MainScreen/MainScreen.jsx";
import CreationsList from "../../components/CreationsList/CreationsList";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import Section from "../../components/Section/Section";
import Header from "../../components/Header/Header.jsx";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPictures } from "../../redux/jewellery/jewelleryOperations";
import AddPictureButton from "../../components/AddButton/AddPictureButton.jsx";
import { selectIsUserAdmin } from "../../redux/auth/authSelections.js";
import ModalPicture from "../../components/ModalPicture/ModalPicture.jsx";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPictures());
  }, [dispatch]);

  const [selectedPicture, setSelectedPicture] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const isAdmin = useSelector(selectIsUserAdmin);

  const handleOpenModal = (picture) => {
    setIsOpen(true);
    setSelectedPicture(picture);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedPicture(null);
  };

  return (
    <div>
      <Header />
      <Container>
        <Section>
          <MainScreen />
        </Section>
        <Section>
          <CreationsList onPictureClick={handleOpenModal} />
        </Section>
        <Section>
          <AboutUs />
        </Section>
      </Container>
      <Footer />
      {isAdmin && <AddPictureButton />}
      {selectedPicture && (
        <ModalPicture
          isOpen={modalIsOpen}
          picture={selectedPicture}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default HomePage;
