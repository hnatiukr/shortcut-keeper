// libraries
import React, { useEffect } from 'react';

// services
import { useClipboard } from '../hooks/clipboard.hook';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';

const LinkCard = ({ link }) => {
  const clipboard = useClipboard();

  useEffect(() => {
    window.M.updateTextFields();

    const elems = document.querySelectorAll('.tooltipped');
    window.M.Tooltip.init(elems);
  }, []);

  const copyHandler = (event) => {
    event.preventDefault();
    clipboard.use(event);
  };

  return (
    <div className='card link_card'>
      <div className='card-content white-text'>
        <span className='card-title black-text link_card_title'>You link:</span>
        <button
          className='btn tooltipped waves-effect yellow accent-4 black-text link_card_btn'
          data-position='top'
          data-tooltip='Click to copy'
          type='button'
          data-clipboard={link.to}
          onClick={copyHandler}
        >
          <FontAwesomeIcon icon={faClone} className='copy_icon' />
          {link.to}
        </button>

        <table className='black-text card_link_table'>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Base URL:</td>
              <td>{link.from}</td>
            </tr>
            <tr>
              <td>Number of clicks:</td>
              <td>{link.clicks}</td>
            </tr>
            <tr>
              <td>Created at:</td>
              <td>{new Date(link.date).toLocaleDateString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='link_card_footer'>
        <a className='btn yellow accent-4 black-text' href='/links'>
          Back
        </a>
      </div>
    </div>
  );
};

export default LinkCard;
