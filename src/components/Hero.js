import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id='banner-section'>
            <div className='banner-content d-flex align-items-center pb-120'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10'>
                            <div className='main-content'>
                                <div className='item one wow fadeInDown'>
                                    <img src="/icon-1.png" alt="image" />
                                    <h5>UI/UX</h5>
                                </div>
                                <div className='item two wow fadeInDown'>
                                    <img src="/icon-2.png" alt="image" />
                                    <h5>Illustrations</h5>
                                </div>
                                <div className='item three wow fadeInDown'>
                                    <img src="/icon-3.png" alt="image" />
                                    <h5>Hi there!</h5>
                                </div>
                                <div className='item four wow fadeInDown'>
                                    <img src="/icon-4.png" alt="image" />
                                    <h5>Work with me</h5>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-6'>
                                        <div className='right-area text-center'>
                                            <img src="/banner-circle.png" className='right-img ' alt="banner-circle" />
                                            <div className='download-area'>
                                                <a href="/" className='download fw-bold fs-5 bg-light'>
                                                    Download CV
                                                    <img src="/download-Icon.png" className='mx-2' alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row  justify-content-center'>
                        <div className='col-lg-7 d-flex align-items-center'>
                            <div className='cool text-area text-center'>
                                <h5 className='fw-bold fs-4'>HI THERE, I'M JAMES</h5>
                                <h2>A <span>Digital</span> Product Designer</h2>
                                <div className='btn-area d-flex align-items-center justify-content-center'>
                                    <div>
                                        <span className="contact badge px-4 py-3 rounded-pill"><a href="/" className='fw-bold'>Contact Me</a></span>
                                    </div>
                                    <div>
                                        <span className='btn-icon fw-bold fs-5 my-2 mx-5'>View Project </span>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="75" fill="#311567" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;