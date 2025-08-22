export const fetchCityArticles = async (city) => {
  try {
    const response = await fetch(`/articles/ancient-cities/${city}/index.json`);
    if (!response.ok) throw new Error('City not found');
    return await response.json();
  } catch (error) {
    console.error('Error fetching articles:', error);
    return null;
  }
};

export const fetchArticleContent = async (city, articleId) => {
  try {
    const response = await fetch(`/articles/ancient-cities/${city}/${articleId}.json`);
    if (!response.ok) throw new Error('Article not found');
    return await response.json();
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
};

export const saveArticle = async (city, articleData) => {
  try {
    // This would typically connect to a backend API
    const response = await fetch('/api/articles/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ city, ...articleData })
    });
    return await response.json();
  } catch (error) {
    console.error('Error saving article:', error);
    throw error;
  }
};