import { useState } from 'react';
import { useAdContext } from '../../contexts/AdContext';

const AdManager = () => {
  const { adConfig, setAdConfig } = useAdContext();
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    // Simulate API call
    setTimeout(() => {
      setSaving(false);
      alert('Settings saved successfully!');
    }, 1000);
  };

  const updateConfig = (key, value) => {
    setAdConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const updateProvider = (provider, enabled) => {
    setAdConfig(prev => ({
      ...prev,
      providers: {
        ...prev.providers,
        [provider]: enabled
      }
    }));
  };

  return (
    <div className="admin-ad-manager">
      <h1>Advertisement Settings</h1>
      
      <div className="settings-section">
        <h2>General Settings</h2>
        <div className="setting-group">
          <label>
            <input 
              type="checkbox" 
              checked={adConfig.enabled}
              onChange={(e) => updateConfig('enabled', e.target.checked)}
            />
            Enable Ads
          </label>
        </div>

        <div className="setting-group">
          <label>Ad Density</label>
          <select 
            value={adConfig.density}
            onChange={(e) => updateConfig('density', e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <div className="settings-section">
        <h2>Ad Providers</h2>
        <div className="setting-group">
          <label>
            <input 
              type="checkbox" 
              checked={adConfig.providers.adSense}
              onChange={(e) => updateProvider('adSense', e.target.checked)}
            />
            Google AdSense
          </label>
        </div>
        <div className="setting-group">
          <label>
            <input 
              type="checkbox" 
              checked={adConfig.providers.adAstra}
              onChange={(e) => updateProvider('adAstra', e.target.checked)}
            />
            Ad Astra
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h2>Ad Types</h2>
        <div className="setting-group">
          <label>
            <input 
              type="checkbox" 
              checked={adConfig.types.display}
              onChange={(e) => updateConfig('types', {
                ...adConfig.types,
                display: e.target.checked
              })}
            />
            Display Ads
          </label>
        </div>
        <div className="setting-group">
          <label>
            <input 
              type="checkbox" 
              checked={adConfig.types.video}
              onChange={(e) => updateConfig('types', {
                ...adConfig.types,
                video: e.target.checked
              })}
            />
            Video Ads
          </label>
        </div>
        <div className="setting-group">
          <label>
            <input 
              type="checkbox" 
              checked={adConfig.types.sticky}
              onChange={(e) => updateConfig('types', {
                ...adConfig.types,
                sticky: e.target.checked
              })}
            />
            Sticky Sidebar Ads
          </label>
        </div>
      </div>

      <button 
        onClick={handleSave} 
        disabled={saving}
        className="save-btn"
      >
        {saving ? 'Saving...' : 'Save Settings'}
      </button>
    </div>
  );
};

export default AdManager;