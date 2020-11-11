import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .email()
    .required("Please enter an e-mail address"),
  password: yup.string().min(5, "Enter a password of at least 5 characters"),
  terms: yup
    .boolean()
    .oneOf([true], "Please check box to agree to Terms and Conditions")
});
