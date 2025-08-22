export const shouldShowAd = (pathname, adConfig) => {
  if (!adConfig.enabled) return false;
  
  // Don't show ads on admin pages
  if (pathname.startsWith('/admin')) return false;
  
  // Don't show ads on article reading pages
  if (pathname.includes('/ancient-cities/') && pathname.split('/').length > 3) {
    return false;
  }
  
  return true;
};

export const getAdDensity = (densitySetting) => {
  const densities = {
    low: { display: true, video: false, sticky: false },
    medium: { display: true, video: false, sticky: true },
    high: { display: true, video: true, sticky: true }
  };
  
  return densities[densitySetting] || densities.medium;
};

export const generateAdSlotId = (prefix) => {
  return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
};

export const isAdBlockDetected = () => {
  return new Promise((resolve) => {
    const testAd = document.createElement('div');
    testAd.className = 'adsbygoogle';
    testAd.style.cssText = 'height:1px;width:1px;position:absolute;left:-9999px;';
    document.body.appendChild(testAd);
    
    setTimeout(() => {
      const detected = testAd.offsetHeight === 0;
      document.body.removeChild(testAd);
      resolve(detected);
    }, 100);
  });
};