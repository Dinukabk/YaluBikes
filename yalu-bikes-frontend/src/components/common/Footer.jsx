import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>YaluBikes</h5>
            <p className="text-muted">
              The best bike rental service for your adventures and tours.
            </p>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted">Home</a></li>
              <li><a href="/dashboard" className="text-muted">Dashboard</a></li>
              <li><a href="/make-booking" className="text-muted">Book Now</a></li>
            </ul>
          </Col>
          <Col md={2} className="mb-4 mb-md-0">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-muted">About Us</a></li>
              <li><a href="/special-tours" className="text-muted">Tours</a></li>
              <li><a href="/contact-us" className="text-muted">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect With Us</h5>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white"><FaFacebook size={20} /></a>
              <a href="#" className="text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-white"><FaInstagram size={20} /></a>
              <a href="#" className="text-white"><FaYoutube size={20} /></a>
            </div>
            <p className="text-muted mt-3">
              &copy; {new Date().getFullYear()} YaluBikes. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer