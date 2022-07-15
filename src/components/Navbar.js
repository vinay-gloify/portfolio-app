import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor)


    return (
        <header id="header-section" className={color ? 'header-bg animated sticky-top fadeInDown header-fixed' : '#header-section animated sticky-top fadeInDown header-fixed'}>
            <div className="overlay">
                <div className="container d-flex justify-content-around">
                    <div className="container-fluid mt-4 mb-4">
                        <a href='/'><img src="/logo.png" alt="readora" /></a>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="collapse mx-2 navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/"><span className="mx-3  text-light" style={{ "font-family": "now", "font-weight": "500" }}>Home</span></a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="/"><span className="mx-3 text-light" style={{ "font-family": "now", "font-weight": "500" }}>About</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"><span className="mx-3 text-light" style={{ "font-family": "now", "font-weight": "500" }}>Portfolio</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/"><span className="mx-3 text-light" style={{ "font-family": "now", "font-weight": "500" }}>Products</span></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="dropdown-toggle mx-3 text-light" style={{ "font-family": "now", "font-weight": "500" }}>Pages</span>
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
                                    <button type="button" className="btn bg-transparent d-flex mt-2"><span className='text-light mx-1 mt-4' style={{ "font-family": "now", "font-weight": "500" }}>Cart</span><span className="count badge mt-4 py-2 px-3 rounded-pill text-light">2</span></button>
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