import React, { Fragment, useState } from 'react';
import {Link, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

function Navbar ({ logout, isAuthenticated}){

    const guestLinks = () => (
        <Fragment>
            <li className='nav-item active'>
                <Link className='nav-link' to='/login'>Login</Link>
            </li>
            <li className='nav-item active'>
                <Link className='nav-link' to='/signup'>Signup</Link>
            </li>
        </Fragment>
    );
    
    const authLinks = () => (
        <Fragment>
            <li className='nav-item active'>
                <Link className='nav-link' to='/home'>Home <span className='sr-only'>(current)</span></Link>
            </li>
            <br></br>
            <li className='nav-item active'>
                <Link className='nav-link' to='/sections/addclient/'>Add a New Client</Link>
            </li>
            <br></br>
            <li className='nav-item active'>
                <Link className='nav-link' to='https://blog.securestrux.com/'>SecureStrux News</Link>
            </li>
            <br></br>
            <li className='nav-item active'>
                <Link className='nav-link' to='/' onClick={logout}>Logout</Link>
            </li>
        </Fragment>
    );

    const logoutHandler = () => {
        logout();
    }

    const [redirect, setRedirect] = useState(false);
    
    return(
        <Fragment>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className='navbar-brand'>
                <img src="https://securestrux.com/wp-content/uploads/2020/10/SecureStrux-Cybersecurity-Firm-Logo.png" alt="securestruximage" width="60"/> CompliStrux
                </a>
                <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-toggle='collapse' 
                    data-target='#navbarNav' 
                    aria-controls='navbarNav' 
                    aria-expanded='false' 
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        {isAuthenticated ? authLinks() : guestLinks()}
                    </ul>
                </div>
            </nav>
            {redirect ? <Navigate to='/' /> : <Fragment></Fragment>}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout})(Navbar);