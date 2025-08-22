import { useEffect, useState } from 'react';
import { useAdContext } from '../../contexts/AdContext';

const AdBlockDetector = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);
  const { adConfig, setAdConfig } = useAdContext();

  useEffect(() => {
    const checkAdBlock = async () => {
      try {
        // Test request to ad server
        await fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
          method: 'HEAD',
          mode: 'no-cors',
          cache: 'no-store'
        });
        setAdBlockDetected(false);
      } catch (error) {
        setAdBlockDetected(true);
        setAdConfig(prev => ({ ...prev, enabled: false }));
      }
    };

    checkAdBlock();
  }, [setAdConfig]);

  if (!adBlockDetected) return null;

  return (
    <div className="ad-block-warning">
      <div className="warning-content">
        <h3>Ad Blocker Detected</h3>
        <p>Please consider disabling your ad blocker to support our site. Ads help us keep this service free.</p>
        <button onClick={() => setAdConfig(prev => ({ ...prev, enabled: true }))}>
          I've disabled my ad blocker
        </button>
      </div>
    </div>
  );
};

export default AdBlockDetector;