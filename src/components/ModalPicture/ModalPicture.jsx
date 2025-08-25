import Modal from "react-modal";
import styles from "./ModalPicture.module.css";

const ModalPicture = ({ picture, onClose, isOpen }) => {
  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999999,
          backgroundColor: "rgba(47, 49, 54, 0.8)",
          backdropFilter: "blur(5px)",
        },
        content: {
          position: "relative",
          width: "550px",
          height: "700px",
          border: "none",
          borderRadius: "0",
          padding: "20px",
          backgroundColor: "transparent",
          overflow: "hidden",
          inset: "unset",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        },
      }}
      contentLabel="Image modal"
    >
      {/* <div className={styles.container}> */}
      <img
        src={picture.pictureUrl}
        alt={picture.desc}
        style={{ maxHeight: "80%", maxWidth: "100%" }}
      />
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{picture.title}</h3>
        <p className={styles.desc}>{picture.desc}</p>
      </div>
      {/* </div> */}
    </Modal>
  );
};

export default ModalPicture;
