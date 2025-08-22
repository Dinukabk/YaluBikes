import { useState, useRef } from 'react';
import { useAdContext } from '../../contexts/AdContext';

const VideoAd = ({ placementId, autoplay = false }) => {
  const [showSkip, setShowSkip] = useState(false);
  const videoRef = useRef(null);
  const { adConfig } = useAdContext();

  useEffect(() => {
    if (!autoplay) return;

    const timer = setTimeout(() => {
      setShowSkip(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [autoplay]);

  const handleSkip = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.style.display = 'none';
    }
  };

  if (!adConfig.enabled || !adConfig.types.video) return null;

  return (
    <div className="video-ad-container">
      <video
        ref={videoRef}
        autoPlay={autoplay}
        muted
        playsInline
        className="video-ad"
      >
        <source src={`/ads/videos/${placementId}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {showSkip && (
        <button className="skip-btn" onClick={handleSkip}>
          Skip Ad (5s)
        </button>
      )}
      
      <div className="ad-label">Advertisement</div>
    </div>
  );
};

export default VideoAd;