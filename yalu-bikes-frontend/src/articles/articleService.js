import { fetchCityArticles, fetchArticleContent } from '../api/articles';

export class ArticleService {
  static async getCityArticles(city) {
    return await fetchCityArticles(city);
  }

  static async getArticle(city, articleId) {
    return await fetchArticleContent(city, articleId);
  }

  static validateArticle(article) {
    const requiredFields = ['title', 'content', 'author'];
    return requiredFields.every(field => article[field]);
  }

  static generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
}

export default ArticleService;