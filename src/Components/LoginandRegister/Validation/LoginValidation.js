import * as yup from 'yup';

const loginValidate = yup.object({
  email: yup.string().email().required("Email is a required field"),
  password: yup.string().min(8,"Password must be at least 8 characters").required("Password is a required field")
});

export default loginValidate;