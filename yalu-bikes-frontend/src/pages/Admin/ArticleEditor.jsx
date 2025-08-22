import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { saveArticle } from '../../api/articles';
import { validateArticleData } from '../../utils/articleUtils';

const ArticleEditor = () => {
  const { city, articleId } = useParams();
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [article, setArticle] = useState({
    title: '',
    summary: '',
    content: [],
    metadata: {
      author: '',
      published: new Date().toISOString().split('T')[0],
      tags: []
    }
  });

  const handleSave = async () => {
    try {
      setSaving(true);
      validateArticleData(article);
      await saveArticle(city, article);
      navigate(`/ancient-cities/${city}`);
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setSaving(false);
    }
  };

  const addContentBlock = (type) => {
    setArticle(prev => ({
      ...prev,
      content: [...prev.content, { type, text: '', src: '', alt: '' }]
    }));
  };

  const updateContent = (index, field, value) => {
    setArticle(prev => ({
      ...prev,
      content: prev.content.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  return (
    <div className="article-editor">
      <h1>{articleId ? 'Edit' : 'Create'} Article</h1>
      
      <div className="editor-form">
        <div className="form-group">
          <label>Title</label>
          <input 
            type="text" 
            value={article.title}
            onChange={(e) => setArticle({...article, title: e.target.value})}
            placeholder="Article title"
          />
        </div>

        <div className="form-group">
          <label>Summary</label>
          <textarea 
            value={article.summary}
            onChange={(e) => setArticle({...article, summary: e.target.value})}
            placeholder="Brief summary"
            rows="3"
          />
        </div>

        <div className="content-blocks">
          <h3>Content Blocks</h3>
          {article.content.map((block, index) => (
            <div key={index} className="content-block">
              {block.type === 'paragraph' && (
                <textarea
                  value={block.text}
                  onChange={(e) => updateContent(index, 'text', e.target.value)}
                  placeholder="Paragraph text"
                  rows="4"
                />
              )}
              {block.type === 'image' && (
                <div>
                  <input 
                    type="text" 
                    value={block.src}
                    onChange={(e) => updateContent(index, 'src', e.target.value)}
                    placeholder="Image URL"
                  />
                  <input 
                    type="text" 
                    value={block.alt}
                    onChange={(e) => updateContent(index, 'alt', e.target.value)}
                    placeholder="Alt text"
                  />
                </div>
              )}
            </div>
          ))}
          
          <div className="block-actions">
            <button onClick={() => addContentBlock('paragraph')}>Add Paragraph</button>
            <button onClick={() => addContentBlock('image')}>Add Image</button>
          </div>
        </div>

        <button onClick={handleSave} disabled={saving}>
          {saving ? 'Saving...' : 'Save Article'}
        </button>
      </div>
    </div>
  );
};

export default ArticleEditor;