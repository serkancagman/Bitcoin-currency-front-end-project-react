import * as yup from "yup"

 const RegisterValidation = yup.object({
    email: yup.string().required("Email is a required field").email("This is not a email adress"),
    name: yup.string().required("Name is a required field."),
    password:yup.string().required("Password is a required field.").min(8,"Password must be at least 8 characters"),
    passwordConfirm: yup.string().required("Confirm password is a required field.").oneOf([yup.ref("password")],"Passwords are not the same")
})

export default RegisterValidation