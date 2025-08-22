export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', process.env.VITE_GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: document.title
    });
  }
  
  if (window.fbq) {
    window.fbq('track', 'PageView');
  }
};

export const trackEvent = (category, action, label, value = null) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
  
  if (window.fbq) {
    window.fbq('trackCustom', action, {
      category: category,
      label: label,
      value: value
    });
  }
};

export const trackArticleView = (articleId, title, city) => {
  trackEvent('articles', 'view', articleId, 1);
  trackEvent('articles', 'view_city', city, 1);
  
  // Send to analytics backend
  fetch('/api/analytics/article-view', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      articleId,
      title,
      city,
      timestamp: Date.now(),
      url: window.location.href
    })
  }).catch(console.error);
};

export const trackBooking = (bookingData) => {
  trackEvent('bookings', 'create', bookingData.vehicleType, bookingData.duration);
  
  fetch('/api/analytics/booking', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...bookingData,
      timestamp: Date.now()
    })
  }).catch(console.error);
};