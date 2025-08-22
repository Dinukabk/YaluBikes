import { useEffect } from 'react';
import { useAdContext } from '../../contexts/AdContext';

const AdSenseAd = ({ slotId, format = 'auto', className = '' }) => {
  const { adConfig } = useAdContext();

  useEffect(() => {
    if (!adConfig.enabled || !window.adsbygoogle) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [adConfig.enabled, slotId]);

  if (!adConfig.enabled) return null;

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={import.meta.env.VITE_ADSENSE_CLIENT_ID}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdSenseAd;