import React, { Fragment, useState } from 'react';
import {Link, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';

function Appnav ({ logout, isAuthenticated}){

    const guestLinks = () => (
        <Fragment>
            <li className='nav-item active'>
                <Nav.Link href='/login'>Login</Nav.Link>
            </li>
            <br></br>
            <li className='nav-item active'>
                <Nav.Link href='/signup'>Signup</Nav.Link >
            </li>
        </Fragment>
    );
    
    const authLinks = () => (
        <Fragment>
            <li className='nav-item active'>
                <Nav.Link href='/home'>Home</Nav.Link>
            </li>
            <br></br>
            <li className='nav-item active'>
                <Nav.Link href='/sections/addclient/'>Add a New Client</Nav.Link>
            </li>
            <br></br>
            <li className='nav-item active'>
                <Nav.Link href='https://blog.securestrux.com/'>SecureStrux News</Nav.Link>
            </li>
            <br></br>
            <li className='nav-item active'>
                <Nav.Link href='/' onClick={logout}>Logout</Nav.Link>
            </li>
        </Fragment>
    );

    const logoutHandler = () => {
        logout();
    }

    const [redirect, setRedirect] = useState(false);
    
    return(
        <div>
            <Navbar bg="light" expand="lg"> 
            <a className='navbar-brand'>
            <img src="https://securestrux.com/wp-content/uploads/2020/10/SecureStrux-Cybersecurity-Firm-Logo.png" alt="securestruximage" width="60"/> CompliStrux
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {isAuthenticated ? authLinks() : guestLinks()}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            {redirect ? <Navigate to='/' /> : <Fragment></Fragment>}
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout})(Appnav);