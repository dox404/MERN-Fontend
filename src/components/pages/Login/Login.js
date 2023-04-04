// css
import './login.css'

// Bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

//form validation
import { useFormik } from 'formik'
import { LoginSchema } from '../../Schema'

function Login() {


  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: LoginSchema

  })
  console.log(formik)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">

          </div>
          <div className="col-xl-4 col-sm-12 col-lg-4 border" id='main'>

            <div >

              <Form className="mx-auto my-5 w-50" onSubmit={formik.handleSubmit}>
                <h1>Login</h1>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" id="email" value={formik.values.email} onChange={formik.handleChange} />
                  {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span> : ""}
                  {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" id="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} />
                  {formik.errors.password && formik.touched.password ? <span style={{ color: "red" }}>{formik.errors.password}</span> : ""}
                </Form.Group>

                <Button className="btn btn-primary btn-lg" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
          <div className="col-4">

          </div>
        </div>
      </div>
    </>



  );
}

export default Login;