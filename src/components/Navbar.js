import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header id="header-section" className="animated sticky-top fadeInDown header-fixed">
            <div className="overlay">
                <div className="container d-flex justify-content-around">
                    <div className="container-fluid   mt-4 mb-4">
                        <a href='/'><img src="/logo.png" alt="readora" /></a>
                    </div>
                    <nav className="navbar  navbar-expand-lg navbar-light bg-transparent">
                        <div className="collapse mx-2 navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-3">
                                    <a className="nav-link active text-light fw-bold fs-5" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-light fw-bold fs-5" href="/">About</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-light fw-bold fs-5" href="/">Portfolio</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-light fw-bold fs-5" href="/">Products</a>
                                </li>
                                <li className="nav-item mx-3 dropdown">
                                    <a className="nav-link dropdown-toggle text-light fw-bold fs-5" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Pages
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="/">Blog</a></li>
                                        <hr />
                                        <li><a className="dropdown-item" href="/">Blog Single</a></li>
                                        <hr />
                                        <li><a className="dropdown-item" href="/">Product Single</a></li>
                                        <hr />
                                        <li><a className="dropdown-item" href="/">Portfolio Details</a></li>
                                        <hr />
                                        <li><a className="dropdown-item" href="/">Pricing</a></li>
                                        <hr />
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="btn bg-transparent d-flex text-light fw-bold fs-5 mx-2 mt-4">Cart <span className="count badge mx-1  py-2 px-3 rounded-pill text-light">2</span></button>
                                </li>
                            </ul>
                        </div>
                        <div className='d-flex'>
                            <div className='mt-2'>
                                <span className="contact badge px-4 py-3 rounded-pill bg-danger fw-bold">CONTACT ME</span>
                            </div>
                            <button className="navbar-toggler mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon bg-light"></span>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar;