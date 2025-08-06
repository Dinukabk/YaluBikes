import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { FaBicycle } from 'react-icons/fa'

const Header = () => {
  const navigate = useNavigate()

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <FaBicycle className="me-2" size={25} />
          YaluBikes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/make-booking">Make Booking</Nav.Link>
            <Nav.Link as={Link} to="/special-tours">Special Tours</Nav.Link>
            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Button 
            variant="outline-light" 
            className="ms-lg-3 mt-2 mt-lg-0"
            onClick={() => navigate('/dashboard')}
          >
            Enter Dashboard
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header