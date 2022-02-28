import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actLogin } from './modules/actions'
import styled from 'styled-components'

const ModalWrap = styled.div`
  width: 35%;
  margin: auto;
  position: 'relative';
  }
  @media (max-width:1399px){
    width: 45%;
  }
  @media (max-width:1199px){
    width: 55%;
  }
  @media (max-width:991px){
    width: 70%;
  }
  @media (max-width:767px){
    width: 85%;
  }
  @media (max-width:575px){
    width: 95%;
  }
`

export default function SignIn(props) {
  const error = useSelector(state => state.formModalReducer.error);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    values: {
      taiKhoan: '',
      matKhau: '',
    },
    errors: {
      taiKhoan: '',
      matKhau: '',
    },
    formValid: false,
    usernameValid: false,
    passwordValid: false,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    let message = (value.trim() === '') ? ` *This field is required` : '';
    let { usernameValid, passwordValid } = state;
    if (name === 'taiKhoan') {
      usernameValid = message === '' ? true : false;
    } else {
      passwordValid = message === '' ? true : false;
    }
    setState({
      values: { ...state.values, [name]: value },
      errors: { ...state.errors, [name]: message },
      usernameValid,
      passwordValid,
      formValid: usernameValid && passwordValid
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actLogin(state.values, props.history));
  }
  return (
    <div
      className="container-fluid m-auto px-0"
      style={{
        backgroundImage: 'url(https://wallpaperaccess.com/full/2314983.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="pt-5" style={{ height: '100vh', }}>
        <ModalWrap className="py-5">
          <form onSubmit={handleSubmit} className="p-5" style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '10px' }}>
            <h4 className="text-center">Login Form</h4>
            {error&&(
              <div className="text-center text-danger">{error.data.content}</div>
            )}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" name="taiKhoan" placeholder="Enter your username" onChange={handleOnChange} />
              {state.errors.taiKhoan && (
                <div className="text-danger pt-1">{state.errors.taiKhoan}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Username</label>
              <input type="password" className="form-control" id="password" name="matKhau" placeholder="Enter your password" onChange={handleOnChange} />
              {state.errors.matKhau && (
                <div className="text-danger pt-1">{state.errors.matKhau}</div>
              )}
            </div>
            <p className="text-primary text-right">Forgot your password ?</p>
            <div className="text-center pb-3">
              <button disabled={!state.formValid} className="btn btn-success" type="submit">Login</button>
            </div>
            <p className="font-italic text-center">Don't have an account yet? please <Link className="text-primary" to="/signup" style={{ fontWeight: 'bold', fontSize: '18px' }}>register</Link> now.</p>
          </form>
        </ModalWrap>
      </div>
    </div>

  )
}