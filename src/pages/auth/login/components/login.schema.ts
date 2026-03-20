import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Email format is invalid"),

  password: yup.string().required("Password is required"),
});
