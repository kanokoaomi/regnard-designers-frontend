// import { useState } from "react";
import styles from "./ReadMoreBtn.module.css";
import ReadMoreArea from '@foxeian/react-read-more';

const ReadMoreBtn = ({ text = "" }) => {
    // const [expanded, setExpanded] = useState(false);

    const paragraphs = text.trim().split("\n").filter(p => p.trim().length > 0);
    // const visibleParagraphs = expanded ? paragraphs : paragraphs.slice(0, maxParagraphs);

    return (
        <>
            <ReadMoreArea
                lettersLimit={3000}
                buttonClassName={styles.button}
                textClassName={styles.textWrapper}
                expandLabel="...Read more"
                collapseLabel="Read less"
            >
                {paragraphs}
            </ReadMoreArea>
        </>
    );
}

export default ReadMoreBtn