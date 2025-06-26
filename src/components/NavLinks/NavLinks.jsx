import { NavLink } from "react-router-dom"
import styles from "./NavLinks.module.css"

const NavLinks = () => {
    return (
        <div>
            <div className={styles.linksContainer}>
                <NavLink className={styles.link} to="/register">Register</NavLink>
                <p>|</p>
                <NavLink className={styles.link} to="/login"> Log in</NavLink>
            </div>
        </div>
    )
}

export default NavLinks