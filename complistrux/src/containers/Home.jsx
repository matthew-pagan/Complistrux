import React from 'react';
import { Link } from 'react-router-dom';

function Home (props) {
  return (
    <div className='container'>
      <div className='jumbotron mt-5'>
          <h1 className='display-4'>Welcome to CompliStrux!</h1>
          <p className='lead'>This is an Application built to provide automated Cyber Security Maturity Model Certification(CMMC) Polices and Procedures!</p>
          <hr className='my-4' />
          <p>Login with the button below:</p>
          <Link className='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
      </div>
    </div>
)
} 

export default Home;