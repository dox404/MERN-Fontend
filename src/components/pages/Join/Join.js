import Reac,{useState} from 'react'
import Login from '../Login/Login'
import Signup from '../Signip/Signup'

const Join = () => {
    const [currentForm,setCurrentForm]=useState('Login')

    const toggleForm=(formName)=>{
        setCurrentForm(formName)
    }
  return (
    <div>
      <div className="container-fluid text" id="main-conatiner">
                <div className="row">
                    
                    {/* <div className="col-12 text-center">
                               
                            </div> */}
                    {/* <div className="col-6"><h1>This is 2nd container</h1></div> */}
                    <div className="row justify-content-center align-items-center p-0" id="login-div">
                        <div className="col-sm-12 col-xl-6 p-0" id="main-login">
                            <div className="row p-0">
                                <div className="col-sm-12 col-xl-6 d-none d-sm-block">
                                    <div className="w-100" style={{ height: "100%" }}>
                                        <img src='https://images.unsplash.com/photo-1517733340021-9762be68f73a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' style={{ height: "100%", width: "100%" }} />
                                    </div>
                                    {/* <p style={{ position: "absolute" }}>hii</p> */}
                                </div>
                                <div className="col-sm-12 col-xl-6" id="form">

                                    <h3 className="font-weight-bold my-3">Welcome,</h3>
                                    {
                                        currentForm === 'Login' ? <Login  onFormSwitch={toggleForm}/>:<Signup  onFormSwitch={toggleForm}/>
                                    }
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default Join
