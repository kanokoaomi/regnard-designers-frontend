import { NavLink } from "react-router-dom";
import styles from "./AddPictureButton.module.css";

const AddPictureButton = () => {
  return (
    <div>
      <NavLink className={styles.button} to="/add-picture">
        +
      </NavLink>
    </div>
  );
};

export default AddPictureButton;
