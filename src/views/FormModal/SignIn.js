import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <form className="p-5" style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '10px' }}>
      <h4 className="text-center">Login Form</h4>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" placeholder="Enter your username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Username</label>
        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
      </div>
      <p className="text-primary text-right">Forgot your password ?</p>
      <div className="text-center pb-3">
        <button className="btn btn-success">Login</button>
      </div>
      <p className="font-italic text-center">Don't have an account yet? please <Link className="text-bold text-info" to="/signup">register</Link> now.</p>
    </form>
  )
}