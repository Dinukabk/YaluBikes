import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="hero-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-4">Explore the World on Two Wheels</h1>
            <p className="lead mb-4">
              YaluBikes offers premium bike rentals for your adventures. Whether you're touring the city or hitting mountain trails, we have the perfect bike for you.
            </p>
            <div className="d-flex gap-3">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => navigate('/make-booking')}
              >
                Book Now
              </Button>
              <Button 
                variant="outline-secondary" 
                size="lg"
                onClick={() => navigate('/dashboard')}
              >
                Enter Dashboard
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <img 
              src="/images/hero-bike.jpg" 
              alt="Mountain Bike" 
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero