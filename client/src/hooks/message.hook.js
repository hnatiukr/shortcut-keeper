import { useCallback } from 'react';

export const useMessage = () => {
  return useCallback((text) => {
    if (window.M && text) {
      window.M.toast({ html: text, classes: 'yellow accent-4 black-text' });
    }
  }, []);
};
