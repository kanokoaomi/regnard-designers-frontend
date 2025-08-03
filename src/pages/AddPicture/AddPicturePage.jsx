import { NavLink } from "react-router-dom";
import AddNewPicture from "../../components/AddNewPicture/AddNewPicture";
import Container from "../../components/Container/Container";
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import { ReactSVG } from "react-svg";
// import arrow from "../../assets/arrowBack.svg";
import styles from "./AddPicturePage.module.css";

const AddPicture = () => {
  return (
    <div>
      <header className="header">
        <NavLink className={styles.navlink} to={"/"}>
          <button className="button">
            {/* <ReactSVG
              src={arrow}
              desc="arrow"
              wrapper="span"
              className={styles.icon}
            /> */}
            return
          </button>
        </NavLink>
        <LanguageSelector />
      </header>
      <Container>
        <AddNewPicture />
      </Container>
    </div>
  );
};

export default AddPicture;
