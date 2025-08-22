import { Outlet } from 'react-router-dom';
import AdSenseAd from '../../components/ads/AdSenseAd';
import StickySidebarAd from '../../components/ads/StickySidebarAd';

const AncientCitiesLayout = () => {
  return (
    <div className="ancient-cities-layout">
      <StickySidebarAd />
      <AdSenseAd slotId="ancient_cities_header" format="auto" />
      <div className="ancient-cities-content">
        <Outlet />
      </div>
      <AdSenseAd slotId="ancient_cities_footer" format="horizontal" />
    </div>
  );
};

export default AncientCitiesLayout;