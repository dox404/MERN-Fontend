import {Routes, Route} from "react-router-dom";
import Login from '../components/Login/Login'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Signup from '../components/Signip/Signup'
import Join from '../Pages/Join/Join'
import Profile from '../Pages/Profile/Profile'
const Pages = () => {
    return (
        <>



            <Routes>
               
                    {/* <Route exact path='/login' element={<Login />}></Route> */}
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    {/* <Route path='/signup' element={<Signup/>}></Route> */}
                    <Route path='/profile' element={<Profile/>}></Route>
                    <Route path='/join' element={<Join/>}></Route>
                
            </Routes>



        </>

    )
}

export default Pages