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
