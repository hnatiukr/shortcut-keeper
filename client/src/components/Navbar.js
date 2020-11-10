// libraries
import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

// services
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  return (
    <nav>
      <div className='nav-wrapper yellow accent-4 black-text navbar'>
        <div className='container'>
          <a href='/' className='brand-logo black-text'>
            Link shortener
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <NavLink to='/create' className='black-text'>
                Create
              </NavLink>
            </li>
            <li>
              <NavLink to='/links' className='black-text'>
                My links
              </NavLink>
            </li>
            <li>
              <a onClick={logoutHandler} href='/' className='black-text'>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
