import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

function BasicExample() {
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



      {/* normal bootstrap with cdn links(cdn pasted in index.html file) */}
      {/* <div className="p-0 m-0 border-0 bd-example">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="shoping Cart icon" className="navbar-logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/join">Join</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div> */}






<Navbar bg="light text-white fixed-top" expand="lg">
<Container>
  <Navbar.Brand href="/"><img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="shoping Cart icon" className="navbar-logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/join">Join</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>


    </>
  );
}

export default BasicExample;





{/* <Navbar bg="black text-white" expand="lg">
<Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/login">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">
          Separated link
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */}

