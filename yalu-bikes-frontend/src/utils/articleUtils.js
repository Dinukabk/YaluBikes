export const formatArticleDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const textContent = content
    .filter(item => item.type === 'paragraph')
    .map(item => item.text)
    .join(' ');
  
  const wordCount = textContent.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

export const extractFirstParagraph = (content) => {
  const firstPara = content.find(item => item.type === 'paragraph');
  return firstPara ? firstPara.text : '';
};

export const generateExcerpt = (content, maxLength = 150) => {
  const text = extractFirstParagraph(content);
  return text.length > maxLength 
    ? `${text.substring(0, maxLength)}...` 
    : text;
};

export const validateArticleData = (articleData) => {
  const requiredFields = ['title', 'content', 'author'];
  const missingFields = requiredFields.filter(field => !articleData[field]);
  
  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
  }
  
  if (articleData.content.length === 0) {
    throw new Error('Article content cannot be empty');
  }
  
  return true;
};