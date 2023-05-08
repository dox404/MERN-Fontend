import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Profile from '../../Pages/Profile/Profile'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

function BasicExample() {
  const data = localStorage.getItem('user')

  const navigate = useNavigate()
  const Clear = () => {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <>

      {/* react- bootstrap  */}
      {/* <div className="conatiner">
        <div className="row">
          <div className="col-sm-12">
            <nav class="navbar navbar-expand-lg navbar-light text-white fixed-top font-wight-bold" id="nav-main-div">

              <a class="navbar-brand" href="/"> <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="shoping Cart icon" className="navbar-logo" /></a>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mx-5 ">
                  <li class="nav-item ">
                    <a class="nav-link" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/join">Login/Signup</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/about">About</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div> */}









      <Navbar bg="light text-white fixed-top" expand="lg">
        <Container>
          <Navbar.Brand href="/"><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="shoping Cart icon" className="navbar-logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/profile">profile</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>



              {
                data ?
                  <button onClick={Clear}>LogOut</button>

                  : <Nav.Link href="/join">Login/Signup</Nav.Link>
              }



            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  );
}

export default BasicExample;







