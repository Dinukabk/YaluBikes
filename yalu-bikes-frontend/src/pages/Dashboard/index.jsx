import { useState, useEffect } from 'react';
import BookingWidget from './components/BookingWidget';
import TourHighlights from './components/TourHighlights';
import AdSenseAd from '../../components/ads/AdSenseAd';
import { useArticleContext } from '../../contexts/ArticleContext';
import { fetchCityArticles } from '../../api/articles';

const Dashboard = () => {
  const [recentTours, setRecentTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const { recentArticles } = useArticleContext();

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        // Load featured tours
        const anuradhapuraData = await fetchCityArticles('anuradhapura');
        setRecentTours(anuradhapuraData?.articles?.slice(0, 3) || []);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading) {
    return <div className="loading">Loading dashboard...</div>;
  }

  return (
    <div className="dashboard-page">
      <h1>YaluBikes Dashboard</h1>
      
      <div className="dashboard-grid">
        <div className="dashboard-section">
          <BookingWidget />
        </div>
        
        <div className="dashboard-section">
          <TourHighlights tours={recentTours} />
        </div>

        <div className="dashboard-section">
          <AdSenseAd slotId="dashboard_sidebar" format="vertical" />
        </div>
      </div>

      {recentArticles.length > 0 && (
        <div className="recent-articles">
          <h2>Recently Viewed Articles</h2>
          <div className="articles-list">
            {recentArticles.map(article => (
              <div key={article.id} className="recent-article">
                <h4>{article.title}</h4>
                <p>{article.city} - {new Date(article.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <AdSenseAd slotId="dashboard_bottom" format="horizontal" />
    </div>
  );
};

export default Dashboard;