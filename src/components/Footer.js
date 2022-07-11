import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id='footer-section'>
            <div className='overlay pt-120'>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-12 d-flex justify-content-center mt-5'>
                            <div className='section-header pb-120 text-center mt-5'>
                                <h4 className='sub-title-alt mt-5'>Contact Me</h4>
                                <h3 className='title text-white mt-5 mb-5'>Think I can help? Lets Talk!</h3>
                                <a href="/" className='cmn-btn mt-5 mb-5'>Let's Work Together</a>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-area'>
                        <div className='row d-flex justify-content-between'>
                            <div className='col-lg-4 col-md-4 col-sm-4 d-flex align-items-center justify-cen '>
                                <a href="/"><img src="/logo.png" alt="logo" /></a>
                            </div>
                            <div className='col-lg-8 col-md-8 col-sm-8 d-flex align-items-center justify-content-end justify-cen'>
                                <ul className='d-flex'>
                                    <li>
                                        <a href="/">About</a>
                                    </li>
                                    <li>
                                        <a href="/">Work</a>
                                    </li>
                                    <li>
                                        <a href="/">Service</a>
                                    </li>
                                    <li>
                                        <a href="/">Products</a>
                                    </li>
                                    <li>
                                        <a href="/">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='container'>
                    <div className='main-content'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-8 col-md-8 col-sm-12 d-flex justify-content-start justify-cen'>
                                <div className='left-area'>
                                    <p>Copyright © 2021. Made with passion by <a href="/" className='text-danger'>UIAXIS</a></p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end justify-cen'>
                                <div className='right-area'>
                                    <p>All right reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;