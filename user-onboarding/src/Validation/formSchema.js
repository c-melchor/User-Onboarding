import * as yup from "yup";

const formSchema = yup.object().shape({
  // .required() takes an error message
  name: yup.string().required("Name is a required field"),
  email: yup
    .string()
    .email()
    .required("Please enter an e-mail address"),
  password: yup.string().min(5, "Enter a password of at least 5 characters"),
  //for the terms, we ONLY want TRUE to be valid... therefore, we can use oneOf after the .boolean() on terms
  //valid item needs to be in square brackets
  //.boolean takes two params, an array with true/false and an error message
  terms: yup
    .boolean()
    .oneOf([true], "Please check box to agree to Terms and Conditions")
});

export default formSchema;
