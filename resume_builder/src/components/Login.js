import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addToken, login } from '../redux/useSlice';
import { selectUser } from '../redux/useSlice';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';

function Login() {
  const navigate = useNavigate('');
  const hello = () => {
    navigate('/signup');
  };

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(selectUser);

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Fill details');
      return;
    }

    const data = { email, password };
    console.log(data);

    axios
      .post('http://localhost:8080/api/v1/auth/authenticate', data)
      .then((res) => {
        if (res.data != null) {
          alert('Successfully logged in');
          navigate('/home');
          dispatch(addToken(res.data.accessToken));
          console.log(res.data.accessToken);
          dispatch(login({ email: email }));
        }
      })
      .catch((error) => {
        alert('Invalid credentials');
      });
  };

  return (
    <div className='log'>
      <div className='wrapper'>
        <div className='login'>
          <h2 className='mb-3'>LOG IN</h2>
          <form>
            <div className='form-group mb-2'>
              <label htmlFor='email'>Username</label>
              <input
                type='email'
                className='form-input'
                name='email'
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className='form-group mb-2'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-input'
                name='password'
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <a href='#' style={{ marginTop: '10px' }} onClick={hello}>
              Not have an account
            </a>
            <button
              type='submit'
              onClick={submitHandler}
              className='btn btn-primary w-100 mt-2'
            >
              SIGNIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
