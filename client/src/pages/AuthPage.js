// libraries
import React, { useState, useEffect } from 'react';

// services
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';

const AuthPage = () => {
  const message = useMessage();
  const { loading, request, error, clearError } = useHttp();
  const [form, setForm] = useState({ email: '', password: '' });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form });
      console.log(data);
    } catch (error) {}
  };

  return (
    <div className='row'>
      <div className='col s6 offset-s3'>
        <h1 className='yellow accent-4 black-text auth_h1'>Link Shortener</h1>
        <div className='card'>
          <div className='card-content white-text'>
            <span className='card-title'>Authorization</span>
            <div>
              <div className='input-field'>
                <input
                  className='validate auth_input'
                  id='email'
                  type='email'
                  name='email'
                  onChange={changeHandler}
                />
                <label className='auth_label' htmlFor='email'>
                  Email
                </label>
              </div>

              <div className='input-field'>
                <input
                  className='validate auth_input'
                  id='password'
                  type='password'
                  name='password'
                  onChange={changeHandler}
                />
                <label className='auth_label' htmlFor='password'>
                  Password
                </label>
              </div>
            </div>
          </div>
          <div className='card-action auth_btns'>
            <button
              onClick={registerHandler}
              disabled={loading}
              className='btn  waves-effect waves-light black white-text'
            >
              Sign up
            </button>
            <button
              disabled={loading}
              className='btn  waves-effect yellow accent-4 black-text'
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
