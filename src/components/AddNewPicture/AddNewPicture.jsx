import { useId, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./AddNewPicture.module.css";
import { AddPictureSchema } from "../../utils/schemas";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addJewelleryPicture } from "../../redux/jewellery/jewelleryOperations";
import { ErrorToast } from "../../utils/errorToast";
import { SuccessToast } from "../../utils/successToast";

const INITIAL_VALUES = {
  title: "",
  desc: "",
  pictureUrl: null,
};

const AddNewPicture = () => {
  const titleId = useId();
  const descId = useId();
  const [preview, setPreview] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    console.log("handleSubmit triggered", values);
    try {
      console.log(values);
      const formData = new FormData();
      formData.append("pictureUrl", values.pictureUrl);
      formData.append("title", values.title);
      formData.append("desc", values.desc);
      console.log("File from formData:", formData.get("pictureUrl"));
      await dispatch(addJewelleryPicture(formData)).unwrap();
      actions.resetForm();
      SuccessToast("Picture added successfully!");
    } catch (error) {
      ErrorToast(error.message || "Failed to add picture. Please try again.");
    }
  };

  const { t } = useTranslation();
  const { title } = t("addPicture");

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>{title}</h3>
        {/* <div className={styles.pictureContainer}>+</div> */}
      </div>

      <div>
        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={handleSubmit}
          validationSchema={AddPictureSchema}
        >
          {({ setFieldValue }) => (
            <Form className={styles.form}>
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
                <ErrorMessage name="pictureUrl" component="div" />
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
                    Description:
                  </label>
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
                <div className={styles.buttonWrapper}>
                  <button className="button" type="submit">
                    Add a picture
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddNewPicture;
