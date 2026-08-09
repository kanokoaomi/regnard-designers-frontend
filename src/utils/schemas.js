import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*Too Short!")
    .max(50, "*Too Long!")
    .required("*Required"),
  email: Yup.string().email("*Must be a valid email!").required("*Required"),
  password: Yup.string()
    .min(8, "*Too short")
    .max(24, "*Too long")
    .required("*Required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("*Must be a valid email!").required("*Required"),
  password: Yup.string()
    .min(8, "*Too short")
    .max(24, "*Too long")
    .required("*Required"),
});

export const AddPictureSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "*Too Short!")
    .max(50, "*Too Long!")
    .required("*Required"),
  desc: Yup.string()
    .min(10, "*Too Short!")
    .max(250, "*Too Long!")
    .required("*Required"),
  pictureUrl: Yup.mixed()
    .required("*Image is required")
    .test(
      "fileFormat",
      "*Unsupported file format",
      (value) =>
        value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
    ),
});

export const updatePictureSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "*Too Short!")
    .max(50, "*Too Long!"),
  desc: Yup.string()
    .min(10, "*Too Short!")
    .max(250, "*Too Long!"),
   pictureUrl: Yup.mixed().test(
    "fileFormat",
    "*Unsupported file format",
    (value) => {
      if (!value) return true;

      // Existing picture URL
      if (typeof value === "string") return true;

      // New uploaded file
      return ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
    }
  ),
});