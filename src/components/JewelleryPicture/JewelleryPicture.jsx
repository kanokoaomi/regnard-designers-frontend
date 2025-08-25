import ModalPicture from "../ModalPicture/ModalPicture";
import styles from "./JewelleryPicture.module.css";

const JewelleryPicture = ({
  picture,
  isAdmin,
  onDeleteButtonClick,
  onUpdateButtonClick,
  onClick,
}) => {
  return (
    <div>
      <div onClick={onClick} className={styles.pictureContainer}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.picture}
            src={picture.pictureUrl}
            alt={picture.title}
          />
        </div>
        {/* <p className={styles.text}>{picture.title}</p> */}
        {isAdmin && (
          <button
            className={styles.buttonDelete}
            onClick={() => onDeleteButtonClick(picture._id)}
          >
            delete
          </button>
        )}
        {isAdmin && (
          <button
            onClick={() => onUpdateButtonClick(picture._id)}
            className={styles.buttonUpdate}
          >
            edit
          </button>
        )}
      </div>
    </div>
  );
};

export default JewelleryPicture;
