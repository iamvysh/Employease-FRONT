import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navigation.css"
import Image from "../image/logo.jpg"
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {

const navigate=useNavigate()
const location=useLocation()
const isHomePage=location.pathname==="/"
const isemployee=location.pathname==="/employeemain"
  return (
    <>

<Navbar expand="lg" className="bg-body-tertiary " bg='transparent' fixed={isHomePage||isemployee?'top':null}>
      <Container fluid>
        <Navbar.Brand href="#"><img src={Image} alt=""  style={{filter: "contrast(500%)"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={()=>navigate("/")}  className='navbarItems ' ><h5 className='nav_item'>Home</h5></Nav.Link>
            <Nav.Link href="#about"  className='navbarItems '><h5 className='nav_item'>About</h5></Nav.Link>
            <Nav.Link href="#action2" className='navbarItems '><h5 className='nav_item'>Signin</h5></Nav.Link>
            
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </>
  );
};

export default Navigation;
