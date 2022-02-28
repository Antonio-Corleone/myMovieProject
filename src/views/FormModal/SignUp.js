import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { actRegister } from './modules/actions'
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

export default function SignUp(props) {
  const error = useSelector(state => state.formModalReducer.error);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    values: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      hoTen: '',
      maNhom: 'GP02',
    },
    errors: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      hoTen: '',
    },
    formValid: false,
    usernameValid: false,
    passwordValid: false,
    emailValid: false,
    phoneValid: false,
    fullNameValid: false,
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    let message = (value.trim() === '') ? ` *This field is required` : '';
    let { usernameValid, passwordValid, emailValid, phoneValid, fullNameValid } = state;
    switch (name) {
      case 'taiKhoan':
        usernameValid = message === '' ? true : false;
        break;
      case 'matKhau':
        passwordValid = message === '' ? true : false;
        break;
      case 'email':
        emailValid = message === '' ? true : false;
        if (value && !value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
          emailValid = false;
          message = "*Invalid email address";
        }
        break;
      case 'soDt':
        phoneValid = message === '' ? true : false;
        break;
      case 'hoTen':
        fullNameValid = message === '' ? true : false;
        break;
      default: break;
    }
    setState({
      values: { ...state.values, [name]: value },
      errors: { ...state.errors, [name]: message },
      usernameValid,
      passwordValid,
      emailValid,
      phoneValid,
      fullNameValid,
      formValid: usernameValid && passwordValid && emailValid && phoneValid && fullNameValid
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actRegister(state.values, props.history));
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
          <form className="p-5" style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '10px' }} onSubmit={handleSubmit}>
            <h4 className="text-center">SignUp Form</h4>
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
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name="matKhau" placeholder="Enter your password" onChange={handleOnChange} />
              {state.errors.matKhau && (
                <div className="text-danger pt-1">{state.errors.matKhau}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" onChange={handleOnChange} />
              {state.errors.email && (
                <div className="text-danger pt-1">{state.errors.email}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" className="form-control" id="phone" name="soDt" placeholder="Enter your phone number" onChange={handleOnChange} />
              {state.errors.soDt && (
                <div className="text-danger pt-1">{state.errors.soDt}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input type="text" className="form-control" id="full-name" name="hoTen" placeholder="Enter your full name" onChange={handleOnChange} />
              {state.errors.hoTen && (
                <div className="text-danger pt-1">{state.errors.hoTen}</div>
              )}
            </div>
            <div className="text-center py-3">
              <button disabled={!state.formValid} className="btn btn-success">SignUp</button>
            </div>
            <p className="font-italic text-center">Already have an account ?<Link className="text-primary pl-2" to="/signin" style={{ fontWeight: 'bold', fontSize: '18px' }}>Login</Link> here.</p>
          </form>
        </ModalWrap>
      </div>
    </div>
  )
}
