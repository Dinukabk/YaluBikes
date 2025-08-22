import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleCard from '../../components/articles/ArticleCard';
import AdSenseAd from '../../components/ads/AdSenseAd';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { fetchCityArticles } from '../../api/articles';

const CityArticles = () => {
  const { city } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        setLoading(true);
        const data = await fetchCityArticles(city);
        if (data) {
          setArticles(data.articles || []);
        } else {
          setError('City not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      loadArticles();
    }
  }, [city]);

  if (loading) return <LoadingSpinner text="Loading articles..." />;
  if (error) return <div className="error-page">Error: {error}</div>;

  return (
    <div className="city-articles-page">
      <h1>{city} - Ancient City Articles</h1>
      <AdSenseAd slotId="city_articles_top" format="auto" />
      
      <div className="articles-grid">
        {articles.map(article => (
          <ArticleCard 
            key={article.id} 
            article={article} 
            city={city} 
          />
        ))}
      </div>

      {articles.length === 0 && (
        <div className="no-articles">
          <p>No articles found for {city}. Check back later!</p>
        </div>
      )}

      <AdSenseAd slotId="city_articles_bottom" format="horizontal" />
    </div>
  );
};

export default CityArticles;