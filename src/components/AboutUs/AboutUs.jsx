import Line from "../Line/Line"
import ReadMoreBtn from "../ReadMoreButton/ReadMoreBtn"
import styles from "./AboutUs.module.css"

const AboutUs = () => {
    return (
        <div>
            <div className={styles.title}><h2 className="title">About <span className="yellowSpan">Us</span></h2></div>
            <div className={styles.container}>
                {/* <div className={styles.infoContainer}>
                    {/* <img src="" alt="" /> */}
                {/* <div className={styles.avatar}></div> */}
                {/* <div> */}
                {/* <h3 className={styles.name}>Stephan</h3>
                    <ReadMoreBtn
                        text={`"From the moment I saw gold flowing in the crucible, I felt a profound fascination for the precious metal. This led to my lifelong passion for goldsmithing. My story began at the 'Institut d'Art et Technique de Bruxelles,' where I learned the art of goldsmithing. To deeply understand the knowledge and properties of each gemstone, I further studied geology and gemology at KUL Leuven. My drive was to unveil their hidden beauty, and this fascination inspired my creations.

                            I developed a passion for combining art, gold, and gemstones into jewelry. Inspired by great masters, I translate jewelry into my own medium: gold. My travels through Asia and my deep connection with Brazil have influenced my work. The vibrant colors and culture of this large Latin American country inspire my creativity. I aim to be a bridge builder between different cultures and eras, where traditional craftsmanship and modern design complement each other.

                            The process of jewelry creation starts with sketches and designs and culminates in the finished jewel. In my workshop, I draw and forge with great precision, making my creations expressions of beauty and contemporary technique."`}
                    /> */}
                {/* <p className={styles.text}></p>
                    <p className={styles.text}></p> */}
                {/* <p className={styles.text}><b>Stephan Armand</b></p> */}
                {/* </div> */}

                <div className={styles.infoContainer}>
                    <div className={styles.avatar}></div>
                    <h3 className={styles.name}>Stephan</h3>
                    <div className={styles.textWrapper}>
                        <h3 className={styles.nameForAdaptive}>Stephan</h3>
                        <div>
                            <p className={styles.text}>"From the moment I saw gold flowing in the crucible, I felt a profound fascination for the precious metal. This led to my lifelong passion for goldsmithing. My story began at the "Institut d'Art et Technique de Bruxelles," where I learned the art of goldsmithing. To deeply understand the knowledge and properties of each gemstone, I further studied geology and gemology at KUL Leuven. My drive was to unveil their hidden beauty, and this fascination inspired my creations.</p>
                            <p className={styles.text}>I developed a passion for combining art, gold, and gemstones into jewelry. Inspired by great masters, I translate jewelry into my own medium: gold. My travels through Asia and my deep connection with Brazil have influenced my work. The vibrant colors and culture of this large Latin American country inspire my creativity. I aim to be a bridge builder between different cultures and eras, where traditional craftsmanship and modern design complement each other.</p>
                            <p className={styles.text}>The process of jewelry creation starts with sketches and designs and culminates in the finished jewel. In my workshop, I draw and forge with great precision, making my creations expressions of beauty and contemporary technique."</p>
                            <p className={styles.text}><b>Stephan Armand</b></p>
                        </div>
                    </div>
                </div>
                <Line />
                <div className={styles.infoContainer}>
                    <h3 className={styles.name}>Maxime</h3>
                    <div className={styles.avatarTwo}></div>
                    <div className={styles.textWrapperTwo}>
                        <h3 className={styles.nameForAdaptiveTwo}>Maxime</h3>
                        <p className={styles.textTwo}>Lorem ipsum dolor sit amet consectetur. Euismod lacus commodo quis consequat donec blandit velit dolor elit. Platea lectus mauris egestas sit. Lacus pharetra lorem purus nunc augue scelerisque lacus vitae. Dignissim duis tellus ut nec porta mauris aliquam nunc pellentesque.Lorem ipsum dolor sit amet consectetur. Euismod lacus commodo quis consequat donec blandit velit dolor elit. Platea lectus mauris egestas sit. Lacus pharetra lorem purus nunc augue scelerisque lacus vitae. Dignissim duis tellus ut nec porta mauris aliquam nunc pellentesque.</p>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default AboutUs