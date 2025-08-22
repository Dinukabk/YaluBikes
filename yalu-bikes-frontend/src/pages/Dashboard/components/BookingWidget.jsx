import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingWidget = () => {
  const [bookingData, setBookingData] = useState({
    vehicleType: 'bike',
    date: '',
    duration: '2 hours'
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/make-booking', { state: bookingData });
  };

  const handleChange = (field, value) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="booking-widget">
      <h3>Quick Booking</h3>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Vehicle Type</label>
          <select 
            value={bookingData.vehicleType}
            onChange={(e) => handleChange('vehicleType', e.target.value)}
          >
            <option value="bike">Bike</option>
            <option value="car">Car</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date</label>
          <input 
            type="date" 
            value={bookingData.date}
            onChange={(e) => handleChange('date', e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        <div className="form-group">
          <label>Duration</label>
          <select 
            value={bookingData.duration}
            onChange={(e) => handleChange('duration', e.target.value)}
          >
            <option value="2 hours">2 Hours</option>
            <option value="4 hours">4 Hours</option>
            <option value="full day">Full Day</option>
            <option value="2 days">2 Days</option>
          </select>
        </div>

        <button type="submit" className="book-now-btn">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingWidget;