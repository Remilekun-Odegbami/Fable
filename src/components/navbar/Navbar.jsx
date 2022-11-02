import { Link } from 'react-router-dom';
import React from 'react';
import './navbar.css';
import logo from '../../Media/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link to="/" className='text-uppercase navbar-brand'>
                    <img src={logo} alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse pages" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 ">
                        <Link className='nav-item ml-5' to="/collections">collections</Link>
                        <Link className='nav-item ml-5' to="customizer">customizer</Link>
                        <Link className='nav-item ml-5' to="/checkout">sale</Link>
                    </div>
                    <div className="navbar-nav me-auto mb-2">
                        <Link className='nav-item ml-5' to="/cart">items</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
