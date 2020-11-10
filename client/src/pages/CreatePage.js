// libraries
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

// services
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';

const CreatePage = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { request } = useHttp();
  const [link, setLink] = useState('');

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = (event) => {
    const { value } = event.target;
    setLink(value);
  };

  const presshandler = async (event) => {
    if (event.key === 'Enter') {
      try {
        const data = await request(
          '/api/link/generate',
          'POST',
          { from: link },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );

        const { _id } = data.link;
        history.push(`/details/${_id}`);
      } catch (error) {}
    }
  };

  return (
    <div className='row'>
      <div className='col s8 offset-s2'>
        <div className='input-field create_input_field'>
          <input
            className='validate auth_input create_input'
            id='link'
            type='text'
            value={link}
            onChange={changeHandler}
            onKeyPress={presshandler}
          />
          <label className='auth_label' htmlFor='link'>
            Enter link here
          </label>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
