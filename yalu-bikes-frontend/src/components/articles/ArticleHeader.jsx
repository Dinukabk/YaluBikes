import { useParams } from 'react-router-dom';
import { useArticleContext } from '../../contexts/ArticleContext';
import { formatArticleDate } from '../../utils/articleUtils';

const ArticleHeader = ({ title, meta }) => {
  const { city } = useParams();
  const { addRecentArticle } = useArticleContext();

  useEffect(() => {
    addRecentArticle({
      id: articleId,
      title,
      city,
      date: meta.published,
      author: meta.author
    });
  }, [title, city, meta.published, meta.author, addRecentArticle]);

  return (
    <header className="article-header">
      <h1>{title}</h1>
      <div className="article-meta">
        <span className="author">By {meta.author}</span>
        <span className="date">{formatArticleDate(meta.published)}</span>
        {meta.readingTime && (
          <span className="reading-time">{meta.readingTime} min read</span>
        )}
      </div>
      {meta.tags && (
        <div className="article-tags">
          {meta.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </header>
  );
};

export default ArticleHeader;