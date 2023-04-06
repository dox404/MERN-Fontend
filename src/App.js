
import './App.css';
import Login from './components/pages/Login/Login'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Routes from './components/pages/Routess'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <>
       <ToastContainer />
      <Navbar/>
      <Routes />
    
    </>
  )
}

export default App;
