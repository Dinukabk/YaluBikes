import { useTranslation } from 'react-i18next';

const Hero = ({ title, subtitle, image, ctaText, ctaLink }) => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {ctaText && ctaLink && (
          <a href={ctaLink} className="cta-button">
            {ctaText}
          </a>
        )}
      </div>
      {image && (
        <div className="hero-image">
          <img src={image} alt={title} />
        </div>
      )}
    </section>
  );
};

export default Hero;