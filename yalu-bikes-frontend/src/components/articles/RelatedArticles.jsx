import { Link } from 'react-router-dom';
import { useArticleContext } from '../../contexts/ArticleContext';

const RelatedArticles = ({ articleIds, currentCity }) => {
  const { featuredArticles } = useArticleContext();

  if (!articleIds || articleIds.length === 0) return null;

  const relatedArticles = featuredArticles.filter(article => 
    articleIds.includes(article.id) && article.city === currentCity
  );

  if (relatedArticles.length === 0) return null;

  return (
    <div className="related-articles">
      <h3>Related Articles</h3>
      <div className="related-grid">
        {relatedArticles.map(article => (
          <Link
            key={article.id}
            to={`/ancient-cities/${currentCity}/${article.id}`}
            className="related-article"
          >
            <h4>{article.title}</h4>
            <p>{article.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;