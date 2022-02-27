import React from 'react';
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <form className="p-5" style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '10px' }}>
    <h4 className="text-center">SignUp Form</h4>
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input type="text" className="form-control" id="username" placeholder="Enter your username" />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" id="password" placeholder="Enter your password" />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input type="email" className="form-control" id="email" placeholder="Enter your email" />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone Number</label>
      <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
    </div>
    <div className="form-group">
      <label htmlFor="full-name">Full Name</label>
      <input type="text" className="form-control" id="full-name" placeholder="Enter your full name" />
    </div>
    <div className="text-center py-3">
      <button className="btn btn-success">SignUp</button>
    </div>
    <p className="font-italic text-center">Already have an account ?<Link className="text-bold text-info pl-2" to="/signin">Login</Link> here.</p>
  </form>
  )
}
