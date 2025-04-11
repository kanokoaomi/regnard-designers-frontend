import styles from "./AboutUs.module.css"

const AboutUs = () => {
    return (
        <div>
            <div className={styles.title}><h2 className="title">About <span className="yellowSpan">Us</span></h2></div>
            <div>
                <div className={styles.infoContainer}>
                    {/* <img src="" alt="" /> */}
                    <div className={styles.avatar}></div>
                    <div>
                        <h3 className={styles.name}>Stephan</h3>
                        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur. Euismod lacus commodo quis consequat donec blandit velit dolor elit. Platea lectus mauris egestas sit. Lacus pharetra lorem purus nunc augue scelerisque lacus vitae. Dignissim duis tellus ut nec porta mauris aliquam nunc pellentesque.Lorem ipsum dolor sit amet consectetur. Euismod lacus commodo quis consequat donec blandit velit dolor elit. Platea lectus mauris egestas sit. Lacus pharetra lorem purus nunc augue scelerisque lacus vitae. Dignissim duis tellus ut nec porta mauris aliquam nunc pellentesque.</p>
                    </div>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.textContainer}>
                        <h3 className={styles.name}>Maxime</h3>
                        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur. Euismod lacus commodo quis consequat donec blandit velit dolor elit. Platea lectus mauris egestas sit. Lacus pharetra lorem purus nunc augue scelerisque lacus vitae. Dignissim duis tellus ut nec porta mauris aliquam nunc pellentesque.Lorem ipsum dolor sit amet consectetur. Euismod lacus commodo quis consequat donec blandit velit dolor elit. Platea lectus mauris egestas sit. Lacus pharetra lorem purus nunc augue scelerisque lacus vitae. Dignissim duis tellus ut nec porta mauris aliquam nunc pellentesque.</p>
                    </div>
                    {/* <img src="" alt="" /> */}
                    <div className={styles.avatar}></div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs