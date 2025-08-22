import { Link } from 'react-router-dom';

const TourHighlights = ({ tours }) => {
  if (!tours || tours.length === 0) {
    return (
      <div className="tour-highlights">
        <h3>Featured Tours</h3>
        <p>No tours available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="tour-highlights">
      <h3>Featured Ancient City Tours</h3>
      <div className="tours-grid">
        {tours.map(tour => (
          <div key={tour.id} className="tour-card">
            <img src={tour.image} alt={tour.title} />
            <div className="tour-info">
              <h4>{tour.title}</h4>
              <p>{tour.summary}</p>
              <Link 
                to={`/ancient-cities/anuradhapura/${tour.id}`}
                className="tour-link"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourHighlights;