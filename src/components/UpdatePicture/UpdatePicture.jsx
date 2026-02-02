import React, { useEffect, useId, useState } from "react";
import { useSelector } from "react-redux";
import { ErrorToast } from "../../utils/errorToast";
import { SuccessToast } from "../../utils/successToast";
import styles from "../AddNewPicture/AddNewPicture.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { updatePictureSchema } from "../../utils/schemas";
import { selectOnePicture } from "../../redux/jewellery/jewellerySelectors";

// const INITIAL_VALUES = {
//   title: "",
//   desc: "",
//   pictureUrl: null,
// };

const UpdatePicture = ({ handleSubmit }) => {
  const titleId = useId();
  const descId = useId();
  const descFrId = useId();
  const descNlId = useId();

  const currentPicture = useSelector(selectOnePicture);

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (currentPicture?.pictureUrl) {
      setPreview(currentPicture.pictureUrl);
    }
  }, [currentPicture]);

  if (!currentPicture) {
    return <div>Loading...</div>;
  }

  const INITIAL_VALUES = {
    title: currentPicture.title || "",
    desc: currentPicture.desc || "",
    descFr: currentPicture.descFr || "",
    descNl: currentPicture.descNl || "",
    pictureUrl: currentPicture.pictureUrl,
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Update the picture</h3>
      <div>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={updatePictureSchema}
          enableReinitialize
        >
          {({ setFieldValue }) => (
            <Form>
              <div className={styles.form}>
                <div className={styles.pictureContainer}>
                  <label htmlFor="pictureUrl" className={styles.labelPicture}>
                    {!preview && <span className={styles.plusIcon}>＋</span>}
                    {preview && (
                      <img
                        src={preview}
                        alt="preview"
                        className={styles.imagePreview}
                      />
                    )}
                  </label>

                  <input
                    id="pictureUrl"
                    name="pictureUrl"
                    type="file"
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      setFieldValue("pictureUrl", file);
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setPreview(url);
                      }
                    }}
                    style={{ display: "none" }}
                  />
                  <ErrorMessage
                    className={styles.error}
                    name="pictureUrl"
                    component="div"
                  />
                </div>
                <div className={styles.formContainer}>
                  <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor={titleId}>
                      Title:
                    </label>
                    <Field
                      autoComplete={false.toString()}
                      placeholder={"Gold Ring"}
                      className={styles.input}
                      type="text"
                      name="title"
                      id={titleId}
                    />
                    <ErrorMessage
                      className={styles.error}
                      name="title"
                      component="span"
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor={descId}>
                      English description:
                    </label>
                    <p className={styles.text}>
                      *Will be also used as default description.
                    </p>
                    <Field
                      as="textarea"
                      cols="50"
                      rows="4"
                      autoComplete={false.toString()}
                      placeholder={"Gold ring with a big smaragd"}
                      className={styles.input}
                      type="text"
                      name="desc"
                      id={descId}
                    />
                    <ErrorMessage
                      className={styles.error}
                      name="desc"
                      component="span"
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor={descFrId}>
                      French description:
                    </label>
                    <Field
                      as="textarea"
                      cols="50"
                      rows="4"
                      autoComplete={false.toString()}
                      placeholder={"Bague en or avec une grosse étincelle"}
                      className={styles.input}
                      type="text"
                      name="descFr"
                      id={descFrId}
                    />
                    <ErrorMessage
                      className={styles.error}
                      name="descFr"
                      component="span"
                    />
                  </div>
                  <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor={descNlId}>
                      Dutch description:
                    </label>
                    <Field
                      as="textarea"
                      cols="50"
                      rows="4"
                      autoComplete={false.toString()}
                      placeholder={"Gouden ring met een grote smaragd"}
                      className={styles.input}
                      type="text"
                      name="descNl"
                      id={descNlId}
                    />
                    <ErrorMessage
                      className={styles.error}
                      name="descNl"
                      component="span"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.buttonWrapper}>
                <button className="button" type="submit">
                  Update
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdatePicture;
