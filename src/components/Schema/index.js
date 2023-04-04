import * as yup from 'yup'


export const LoginSchema=yup.object().shape({
    email:yup.string().email().required('Plese Enter your Email'),
    password:yup.string().min(5).max(10).required("plese enter the password")
})
export const SignUpSchema=yup.object().shape({
    fullname:yup.string().min(5,"Plese enter valid name").max(30,"Plese enter a valid name").required('Please Enter Your Name'),
    email:yup.string().email().required('Plese Enter your Email'),
    password:yup.string().min(5).max(10).required('Please Enter Your Password'),
    confirm_password:yup.string().required('plese confirm ur password').oneOf([yup.ref('password'),null],'Password Must Match')
})