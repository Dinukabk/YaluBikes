import { useEffect } from 'react';
import { trackPageView } from '../utils/tracking';

export const useTracking = (path) => {
  useEffect(() => {
    if (path) {
      trackPageView(path);
    }
  }, [path]);

  return { trackPageView };
};