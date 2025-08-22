import { useState } from 'react';

const Gallery = ({ images, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`gallery ${className}`}>
      <div className="gallery-main">
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
          className="gallery-image"
        />
        {images.length > 1 && (
          <>
            <button className="gallery-nav prev" onClick={prevImage}>
              ‹
            </button>
            <button className="gallery-nav next" onClick={nextImage}>
              ›
            </button>
          </>
        )}
      </div>
      
      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={image.src} alt={image.alt} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;