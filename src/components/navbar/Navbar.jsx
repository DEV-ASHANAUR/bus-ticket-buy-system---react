import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'
import logo from '../../img/logo.png'
const Navbar = () => {
    return (
        <>
            <div className="top-section">
                <div className='container top-content py-3 text-white'>
                    <div>
                        <span>Terms</span>
                        <span className='ps-3'>Privacy Policy</span>
                        <span className='ps-3'>Legal Aggrement</span>
                    </div>
                    <div>
                        <span><i className="fas fa-phone-square-alt"></i> 1 (800) 567 8765</span>
                        <span className='ps-3'><i className="fas fa-envelope-open-text"></i> support@gmail.com</span>
                    </div>
                </div>
            </div>
            <header className='header sticky-top'>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container">
                        {/* <NavLink className="navbar-brand" to="/"><img className='img-fluid' src={logo} alt=".." width="144" /></NavLink> */}
                        <h5 className='flex align-items-center m-0 text-success'>E-Ticket</h5>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
                                <li className="nav-item ps-4">
                                    <NavLink className="nav-link" aria-current="page" exact to="/">Home</NavLink>
                                </li>
                                <li className="nav-item ps-4">
                                    <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item ps-4">
                                    <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                                <li className="nav-item ps-4">
                                    <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar