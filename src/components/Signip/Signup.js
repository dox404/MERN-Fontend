import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// css
import './SignUp.css'

// validation
import { useFormik } from 'formik'
import { SignUpSchema } from '../Schema'
// import { validEmail } from '../Schema';


// toast
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = (props) => {

    // const [emailErr, setEmailErr] = useState(false);
    const navigate = useNavigate()
    const onSubmit = (values) => {
        // const data = JSON.stringify(values)
        axios.post('http://localhost:5000/signup', {
            name: values.fullname,
            email: values.email,
            password: values.password

        })
            .then(function (response) {
                toast.success('Sign Up SucessFull', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                // console.log(values)
                navigate('/')
                return values
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            password: "",
            confirm_password: ""
        },
        validateOnBlur: true,
        onSubmit,
        validationSchema: SignUpSchema
    })

    // const regis = (values) => {
    //     axios.post('http://localhost:5000/signup', {
    //         name: formik.values.fullname,
    //         email: formik.values.email,
    //         password: formik.values.password
    //     })
    //         .then(function (response) {
    //             toast.success('Sign Up SucessFull', {
    //                 position: "top-center",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "light",
    //             });
    //             navigate('/')
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
    // //  console.log(formik.handleSubmit)


    console.log(formik)

    return (
        <>
            {/* <div className="container-fluid text" id="main-conatiner"> */}
            {/* <div className="row"> */}
            {/* <h1 className="my-5 text-center" id="heading">Sign<span style={{ color: "red" }}>Up</span></h1> */}
            {/* <div className="col-12 text-center">
                               
                            </div> */}
            {/* <div className="col-6"><h1>This is 2nd container</h1></div> */}
            {/* <div className="row justify-content-center align-items-center p-0" id="login-div"> */}
            {/* <div className="col-sm-12 col-xl-6 p-0" id="main-login"> */}
            {/* <div className="row p-0"> */}
            {/* <div className="col-sm-12 col-xl-6 d-none d-sm-block"> */}
            {/* <div className="w-100" style={{ height: "100%" }}>
                                        <img src='https://images.unsplash.com/photo-1517733340021-9762be68f73a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' style={{ height: "100%", width: "100%" }} />
                                    </div> */}
            {/* <p style={{ position: "absolute" }}>hii</p> */}
            {/* </div> */}
            {/* <div className="col-sm-12 col-xl-6" id="form"> */}

            {/* <h3 className="font-weight-bold my-3">Welcome,</h3> */}
            <Form className="my-5 p-2" method='POST' onSubmit={formik.handleSubmit} >
                <h1 className="my-5 text-center" id="heading">Sign<span style={{ color: "red" }}>Up</span></h1>
                <Form.Group>
                    <Form.Label><strong>Full Name:</strong></Form.Label>
                    <Form.Control id="fullname" type="text" placeholder="Enter Full Name" value={formik.values.fullname} onChange={formik.handleChange} />
                    {formik.errors.fullname && formik.touched.fullname ? <span className="form-error" style={{ color: "red" }}>{formik.errors.fullname}</span> : ""}
                </Form.Group>
                <Form.Group>
                    <Form.Label><strong>Email:</strong></Form.Label>
                    <Form.Control id="email" type="email" placeholder="Enter Email" value={formik.values.email} onChange={formik.handleChange} />
                    {formik.errors.email && formik.touched.email ? <span className="form-error" style={{ color: "red" }}>{formik.errors.email}</span> : ""}
                </Form.Group>
                <Form.Group>
                    <Form.Label><strong>Password:</strong></Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" id="password" value={formik.values.password} onChange={formik.handleChange} />
                    {formik.errors.password && formik.touched.password ? <span className="form-error" style={{ color: "red" }}>{formik.errors.password}</span> : ""}
                </Form.Group>
                <Form.Group>
                    <Form.Label><strong>Confirm Password:</strong></Form.Label>
                    <Form.Control id="confirm_password" type="password" placeholder="Confirm Password" value={formik.values.confirm_password} onChange={formik.handleChange} />
                    {formik.errors.confirm_password && formik.touched.confirm_password ? <span className="form-error" style={{ color: "red" }}>{formik.errors.confirm_password}</span> : ""}
                </Form.Group>

                {/* <Form.Group className='my-1'><strong><span>Already A user? <a href="./login">Login</a>.</span></strong></Form.Group> */}

                <div className="text-left my-0">
                    <Button className="btn btn-primary my-3 align-center" type="submit" >Register</Button>


                </div>
                <Button onClick={() => props.onFormSwitch('Login')}>Already Have an account? Login here</Button>

            </Form>
            {/* </div> */}
            {/* </div> */}


            {/* </div> */}
            {/* </div> */}
            {/* </div> */}

            {/* </div> */}
        </>
    )
}

export default Signup





