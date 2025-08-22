export const sendBookingEmail = async (bookingData) => {
  try {
    const response = await fetch('/api/email/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'admin@yalubikes.com',
        subject: `New Booking: ${bookingData.vehicleType} - ${bookingData.name}`,
        template: 'booking-confirmation',
        data: bookingData
      })
    });
    
    if (!response.ok) throw new Error('Failed to send email');
    return await response.json();
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};

export const sendContactEmail = async (contactData) => {
  try {
    const response = await fetch('/api/email/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'admin@yalubikes.com',
        subject: `Contact Form: ${contactData.subject}`,
        template: 'contact-form',
        data: contactData
      })
    });
    
    if (!response.ok) throw new Error('Failed to send email');
    return await response.json();
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};

export const sendArticleNotification = async (articleData) => {
  try {
    const response = await fetch('/api/email/article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'admin@yalubikes.com',
        subject: `New Article: ${articleData.title}`,
        template: 'article-notification',
        data: articleData
      })
    });
    
    if (!response.ok) throw new Error('Failed to send notification');
    return await response.json();
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};