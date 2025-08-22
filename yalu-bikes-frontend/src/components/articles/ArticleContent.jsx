import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleHeader from './ArticleHeader';
import { fetchArticleContent } from '../../api/articles';
import { trackArticleView } from '../../utils/tracking';
import AdSenseAd from '../ads/AdSenseAd';

const ArticleContent = () => {
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

    loadArticle();
  }, [city, articleId]);

  if (loading) return <div className="loading">Loading article...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!article) return <div className="not-found">Article not found</div>;

  return (
    <article className="article-content">
      <ArticleHeader 
        title={article.title} 
        meta={article.metadata} 
      />
      
      <AdSenseAd slotId="article_top" className="article-ad" />
      
      <div className="article-body">
        {article.content.map((item, index) => {
          switch (item.type) {
            case 'paragraph':
              return <p key={index}>{item.text}</p>;
            case 'image':
              return (
                <figure key={index} className="article-image">
                  <img src={item.src} alt={item.alt} />
                  {item.caption && <figcaption>{item.caption}</figcaption>}
                </figure>
              );
            case 'quote':
              return (
                <blockquote key={index} className="article-quote">
                  {item.text}
                  {item.author && <cite>— {item.author}</cite>}
                </blockquote>
              );
            default:
              return null;
          }
        })}
      </div>

      <AdSenseAd slotId="article_bottom" className="article-ad" />
    </article>
  );
};

export default ArticleContent;