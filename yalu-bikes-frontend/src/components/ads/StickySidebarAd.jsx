import { useState, useEffect } from 'react';
import AdSenseAd from './AdSenseAd';
import { useAdContext } from '../../contexts/AdContext';

const StickySidebarAd = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { adConfig } = useAdContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!adConfig.enabled || !adConfig.types.sticky) return null;

  return (
    <div className={`sticky-sidebar-ad ${isVisible ? 'visible' : ''}`}>
      <div className="ad-content">
        <h5>Sponsored</h5>
        <AdSenseAd 
          slotId="sidebar_sticky" 
          format="vertical"
        />
        <button 
          className="close-btn"
          onClick={() => setIsVisible(false)}
          aria-label="Close ad"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default StickySidebarAd;