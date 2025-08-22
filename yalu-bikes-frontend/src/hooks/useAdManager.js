import { useEffect } from 'react';
import { useAdContext } from '../contexts/AdContext';

const useAdManager = () => {
  const { adConfig } = useAdContext();

  useEffect(() => {
    if (!adConfig.enabled) return;

    // Load AdSense script
    const loadAdSense = () => {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    };

    // Load AdAstra script
    const loadAdAstra = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.adastra.io/sdk/latest/adastra.min.js';
      script.async = true;
      document.head.appendChild(script);
    };

    if (adConfig.providers?.adSense) {
      loadAdSense();
    }

    if (adConfig.providers?.adAstra) {
      loadAdAstra();
    }
  }, [adConfig.enabled, adConfig.providers]);

  return { adConfig };
};

export default useAdManager;