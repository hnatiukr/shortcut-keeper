// libraries
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// services
import { useClipboard } from '../hooks/clipboard.hook';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';

const LinksList = ({ links }) => {
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

  if (!links.length) {
    return <p className='center'>You don't have saved links yet</p>;
  }

  return (
    <table className='striped'>
      <thead>
        <tr>
          <th>№</th>
          <th>Base URL</th>
          <th>Short URL</th>
          <th>Clicks</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, idx) => {
          return (
            <tr key={link._id}>
              <td>{idx + 1}</td>
              <td>{link.from}</td>
              <td>
                <button
                  className='btn tooltipped waves-effect yellow accent-4 black-text copy_icon'
                  data-position='top'
                  data-tooltip='Click to copy'
                  type='button'
                  data-clipboard={link.to}
                  onClick={copyHandler}
                >
                  <FontAwesomeIcon icon={faClone} />
                </button>
                {link.to}
              </td>
              <td>{link.clicks}</td>
              <td>
                <Link
                  to={`/details/${link._id}`}
                  className='btn yellow accent-4 black-text'
                >
                  Details
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LinksList;
