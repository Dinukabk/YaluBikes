import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import MakeBooking from './pages/MakeBooking'
import SpecialTours from './pages/SpecialTours'
import ContactUs from './pages/ContactUs'
import About from './pages/About'

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/make-booking',
    element: <MakeBooking />
  },
  {
    path: '/special-tours',
    element: <SpecialTours />
  },
  {
    path: '/contact-us',
    element: <ContactUs />
  },
  {
    path: '/about',
    element: <About />
  }
]

export default routes