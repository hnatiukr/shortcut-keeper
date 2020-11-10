import { useCallback } from 'react';
import { useMessage } from './message.hook';

export const useClipboard = () => {
  const message = useMessage();

  const use = useCallback(
    async (event) => {
      const { clipboard } = event.target.dataset;

      // create a temporary textarea
      const textarea = document.createElement('textarea');
      textarea.style = 'visible: hidden';
      document.body.appendChild(textarea);

      // put the link in textarea
      textarea.value = clipboard;

      // select link from textarea
      textarea.focus();
      textarea.select();

      try {
        // add a link to the clipboard
        document.execCommand('copy');

        message('URL copied');
      } catch (err) {
        message('Oops, unable to copy');
      }

      //  remove textarea
      document.body.removeChild(textarea);
    },
    [message]
  );

  return { use };
};
