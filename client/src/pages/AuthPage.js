import React from 'react';

const AuthPage = () => {
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
                />
                <label className='auth_label' htmlFor='email'>
                  Email
                </label>
              </div>

              <div className='input-field'>
                <input
                  id='password'
                  type='password'
                  name='password'
                  className='validate auth_input'
                />
                <label className='auth_label' htmlFor='password'>
                  Password
                </label>
              </div>
            </div>
          </div>
          <div className='card-action auth_btns'>
            <button className='btn black white-text'>Sign up</button>
            <button className='btn yellow accent-4 black-text'>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
