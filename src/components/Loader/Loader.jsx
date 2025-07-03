import styles from "./Loader.module.css"
import { BeatLoader } from "react-spinners";


const Loader = () => {
    return (
        <div className={styles.div}>
            <div className={styles.wrapper}>
                <BeatLoader color="#efca01" size={30} />
            </div>
        </div>
    )
}

export default Loader