import styles from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav>
            <ul className={styles.links}>
                <li className={styles.link}><a href="#">Home</a></li>
                <li className={styles.link}><a href="#">Our creations</a></li>
                <li className={styles.link}><a href="#">About us</a></li>
                <li className={styles.link}><a href="#">Contacts</a></li>
            </ul>
        </nav>
    )
}

export default Navigation