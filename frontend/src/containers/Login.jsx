import React, { useState } from "react";
import { Link, Navigate} from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from "../actions/auth";

function Login ({ login, isAuthenticated }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    login(email, password);
};

if (isAuthenticated) {
  return <Navigate to='/home' />
}

  return (
    <div className="container mt-5">
      <h1 className="textalignleft">Sign In</h1>
      <p className="textalignleft">Sign into your Complistrux Account</p>
      <form className="textalignleft" onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input 
            className="form-control"
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
            />
        </div>
        <div className='form-group'>
          <input 
            className="form-control"
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
            required
            />
        </div>
        <button className="btnbtn-primary" type='submit'>Login</button>
      </form>
      <br></br>
      <p className='textalignleft'>
        Don't have an account? <Link to='/signup'>Sign Up</Link>
      </p>
      <p className='textalignleft'>
        Forgot Your Password? <Link to='/reset-password'>Reset Password</Link>
      </p>
    </div>
  );

};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { login })(Login);