
import './App.css';
// import Login from './components/Login/Login'
// import Home from './Pages/Home/Home'
// import About from './Pages/About/About'
import Routes from './routes/Routess'
import Navbar from './components/Header/Navbar'
// import Footer from './components/Footer/Footer';


import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <><div className="app">
      <ToastContainer />
      <Navbar />
      <Routes />
      {/* <About/> */}
      </div>

    </>
  )
}

export default App;
