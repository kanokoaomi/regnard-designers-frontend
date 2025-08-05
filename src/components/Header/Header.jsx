import { ReactSVG } from "react-svg";
import { useSelector } from "react-redux";
import { useState } from "react";
import { selectIsLoggedIn } from "../../redux/auth/authSelections.js";

import styles from "./Header.module.css";
import regnardDesigners from "../../assets/regnard-designers.svg";
import burger from "../../assets/burgerMenu.svg";

import Navigation from "../Navigation/Navigation";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";
import NavLinks from "../NavLinks/NavLinks.jsx";
import LanguageSelector from "../LanguageSelector/LanguageSelector.jsx";
import LogOut from "../LogOut/LogOut.jsx";

const Header = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <div className={styles.header}>
        <ReactSVG
          src={regnardDesigners}
          desc="Regnard Designers logo"
          wrapper="span"
          className={styles.icon}
        />
        <div className={styles.desktopNav}>
          <Navigation />
          <LanguageSelector />
          {!isLoggedIn && <NavLinks />}
          {isLoggedIn && <LogOut />}
        </div>

        <button className={styles.button} onClick={() => setIsOpen(true)}>
          <ReactSVG
            src={burger}
            desc="BurgerMenu icon"
            wrapper="div"
            className={styles.iconBurger}
          />
        </button>
        {isOpen && (
          <ModalWindow onClose={() => setIsOpen(false)} setIsOpen={setIsOpen} />
        )}
      </div>
      {children}
    </div>
  );
};

export default Header;
