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
  const descFrId = useId();
  const descNlId = useId();
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
      formData.append("descFr", values.descFr);
      formData.append("descNl", values.descNl);
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
                  Add a picture
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddNewPicture;
