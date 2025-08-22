import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from '../../components/articles/ArticleContent';
import RelatedArticles from '../../components/articles/RelatedArticles';
import AdSenseAd from '../../components/ads/AdSenseAd';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { fetchArticleContent } from '../../api/articles';
import { trackArticleView } from '../../utils/tracking';

const ArticlePage = () => {
  const { city, articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true);
        const data = await fetchArticleContent(city, articleId);
        if (data) {
          setArticle(data);
          trackArticleView(articleId, data.title, city);
        } else {
          setError('Article not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (city && articleId) {
      loadArticle();
    }
  }, [city, articleId]);

  if (loading) return <LoadingSpinner text="Loading article..." />;
  if (error) return <div className="error-page">Error: {error}</div>;
  if (!article) return <div className="not-found">Article not found</div>;

  return (
    <div className="article-page">
      <ArticleContent article={article} />
      <AdSenseAd slotId="article_sidebar" format="vertical" />
      <RelatedArticles 
        articleIds={article.relatedArticles} 
        currentCity={city} 
      />
    </div>
  );
};

export default ArticlePage;