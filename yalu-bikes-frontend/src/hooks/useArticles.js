import { useState, useEffect } from 'react';
import { fetchCityArticles, fetchArticleContent } from '../api/articles';

export const useArticles = (city) => {
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

  return { articles, loading, error };
};

export const useArticle = (city, articleId) => {
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

  return { article, loading, error };
};