import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Container, Row, Col, Card, Button, Alert, Form as BForm } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const BookingForm = ({ vehicleType }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    date: '',
    duration: '',
    message: '',
    vehicleType: vehicleType
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    date: Yup.date().required('Date is required').min(new Date(), 'Date cannot be in the past'),
    duration: Yup.string().required('Duration is required'),
    message: Yup.string().max(500, 'Message must be less than 500 characters')
  })

  const onSubmit = (values, { resetForm }) => {
    setIsSubmitting(true)
    
    emailjs.send(
      'YOUR_EMAILJS_SERVICE_ID', // Replace with your service ID
      'YOUR_EMAILJS_TEMPLATE_ID', // Replace with your template ID
      values,
      'YOUR_EMAILJS_USER_ID' // Replace with your user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      toast.success('Booking request sent successfully!')
      setSubmitSuccess(true)
      resetForm()
    }, (error) => {
      console.log('FAILED...', error)
      toast.error('Failed to send booking request. Please try again.')
    })
    .finally(() => {
      setIsSubmitting(false)
    })
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Header className="bg-primary text-white">
              <h3 className="mb-0">Book a {vehicleType}</h3>
            </Card.Header>
            <Card.Body>
              {submitSuccess ? (
                <Alert variant="success" className="text-center">
                  <h4>Thank You!</h4>
                  <p>Your booking request has been submitted successfully.</p>
                  <p>We'll contact you shortly to confirm your reservation.</p>
                  <Button 
                    variant="primary" 
                    onClick={() => setSubmitSuccess(false)}
                  >
                    Make Another Booking
                  </Button>
                </Alert>
              ) : (
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <BForm.Group className="mb-3">
                        <BForm.Label>Full Name</BForm.Label>
                        <Field 
                          type="text" 
                          name="name" 
                          as={BForm.Control} 
                          placeholder="Enter your full name" 
                        />
                        <ErrorMessage name="name" component="div" className="text-danger small" />
                      </BForm.Group>

                      <Row>
                        <Col md={6}>
                          <BForm.Group className="mb-3">
                            <BForm.Label>Email Address</BForm.Label>
                            <Field 
                              type="email" 
                              name="email" 
                              as={BForm.Control} 
                              placeholder="Enter your email" 
                            />
                            <ErrorMessage name="email" component="div" className="text-danger small" />
                          </BForm.Group>
                        </Col>
                        <Col md={6}>
                          <BForm.Group className="mb-3">
                            <BForm.Label>Phone Number</BForm.Label>
                            <Field 
                              type="tel" 
                              name="phone" 
                              as={BForm.Control} 
                              placeholder="Enter your phone number" 
                            />
                            <ErrorMessage name="phone" component="div" className="text-danger small" />
                          </BForm.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <BForm.Group className="mb-3">
                            <BForm.Label>Booking Date</BForm.Label>
                            <Field 
                              type="date" 
                              name="date" 
                              as={BForm.Control} 
                            />
                            <ErrorMessage name="date" component="div" className="text-danger small" />
                          </BForm.Group>
                        </Col>
                        <Col md={6}>
                          <BForm.Group className="mb-3">
                            <BForm.Label>Duration</BForm.Label>
                            <Field 
                              as="select" 
                              name="duration" 
                              className="form-select"
                            >
                              <option value="">Select duration</option>
                              <option value="2 hours">2 hours</option>
                              <option value="4 hours">4 hours</option>
                              <option value="Full day">Full day</option>
                              <option value="2 days">2 days</option>
                              <option value="1 week">1 week</option>
                            </Field>
                            <ErrorMessage name="duration" component="div" className="text-danger small" />
                          </BForm.Group>
                        </Col>
                      </Row>

                      <BForm.Group className="mb-3">
                        <BForm.Label>Special Requests</BForm.Label>
                        <Field 
                          as="textarea" 
                          name="message" 
                          rows={3} 
                          className="form-control" 
                          placeholder="Any special requirements or notes..." 
                        />
                        <ErrorMessage name="message" component="div" className="text-danger small" />
                      </BForm.Group>

                      <div className="d-grid">
                        <Button 
                          type="submit" 
                          variant="primary" 
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Booking'}
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default BookingForm