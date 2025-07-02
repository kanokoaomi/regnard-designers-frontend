import { Oval } from 'react-loader-spinner'
import styles from "./Loader.module.css"

const Loader = () => {
    return (
        <div >
            <Oval
                visible={true}
                height="40"
                width="40"
                color="#efca01"
                secondaryColor="#5d4037"
                ariaLabel="oval-loading"
                wrapperClass={styles.wrapper}
            />
        </div>
    )
}

export default Loader