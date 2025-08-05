import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <div>
      <div className={styles.linksContainer}>
        <NavLink className="link" to="/register">
          Register
        </NavLink>
        <p>|</p>
        <NavLink className="link" to="/login">
          {" "}
          Log in
        </NavLink>
      </div>
    </div>
  );
};

export default NavLinks;
