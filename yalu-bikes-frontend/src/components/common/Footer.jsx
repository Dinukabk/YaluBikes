import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>YaluBikes</h3>
          <p>Exploring ancient cities on two wheels</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">{t('home')}</a></li>
            <li><a href="/dashboard">{t('dashboard')}</a></li>
            <li><a href="/ancient-cities/anuradhapura">{t('ancientCities')}</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: admin@yalubikes.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2023 YaluBikes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;