import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Login/Login'
import Home from './Home/Home'
import About from './About/About'
import Signup from './Signip/Signup'
const Pages = () => {
    return (
        <>



            <Routes>
               
                    <Route exact path='/login' element={<Login />}></Route>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/signup' element={<Signup/>}></Route>
                
            </Routes>



        </>

    )
}

export default Pages