import { useEffect, useRef } from 'react';
import { useAdContext } from '../../contexts/AdContext';

const AdAstraAd = ({ placementId, format = 'banner' }) => {
  const { adConfig } = useAdContext();
  const adRef = useRef(null);

  useEffect(() => {
    if (!adConfig.enabled || !window.AdAstra) return;

    const loadAd = async () => {
      try {
        const ad = new window.AdAstra.Ad({
          placementId,
          container: adRef.current,
          format,
          onLoad: () => console.log('AdAstra ad loaded'),
          onError: (error) => console.error('AdAstra error:', error)
        });
        await ad.load();
      } catch (error) {
        console.error('Failed to load AdAstra ad:', error);
      }
    };

    loadAd();
  }, [adConfig.enabled, placementId, format]);

  if (!adConfig.enabled) return null;

  return (
    <div className="ad-astra-container">
      <div ref={adRef} className="ad-astra-placeholder" />
    </div>
  );
};

export default AdAstraAd;