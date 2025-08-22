export const getAdConfig = async () => {
  try {
    const response = await fetch('/api/ads/config');
    return await response.json();
  } catch (error) {
    console.error('Error fetching ad config:', error);
    return {
      enabled: true,
      providers: {
        adSense: true,
        adAstra: true
      }
    };
  }
};

export const trackAdImpression = async (adType, placement) => {
  try {
    await fetch('/api/ads/track-impression', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ adType, placement, timestamp: Date.now() })
    });
  } catch (error) {
    console.error('Error tracking ad impression:', error);
  }
};

export const trackAdClick = async (adType, placement) => {
  try {
    await fetch('/api/ads/track-click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ adType, placement, timestamp: Date.now() })
    });
  } catch (error) {
    console.error('Error tracking ad click:', error);
  }
};