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
                                    <img src="/icon-1.png" alt="img" />
                                    <h5>UI/UX</h5>
                                </div>
                                <div className='item two wow fadeInDown'>
                                    <img src="/icon-2.png" alt="img" />
                                    <h5>Illustrations</h5>
                                </div>
                                <div className='item three wow fadeInDown'>
                                    <img src="/icon-3.png" alt="img" />
                                    <h5>Hi there!</h5>
                                </div>
                                <div className='item four wow fadeInDown'>
                                    <img src="/icon-4.png" alt="img" />
                                    <h5>Work with me</h5>
                                </div>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-6'>
                                        <div className='right-area text-center'>
                                            <img src="/banner-circle.png" className='right-img ' alt="banner-circle" />
                                            <div className='download-area'>
                                                <a href="/" className='download fs-5 bg-light'>
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
                    <div className='row d-flex justify-content-center'>
                        <div className='col-xs flex align-items-center'>
                            <div className='text-area text-center'>
                                <h5 className='fw-bold fs-5'>HI THERE, I'M JAMES</h5>
                                <h2>A <span>Digital</span> Product <br /> Designer</h2>
                                <div className='btn-area d-flex align-items-center justify-content-center'>
                                    <a href="/" className='cmn-btn'>Contact Me</a>
                                    <a href="/" className='cmn-btn-second'>VIEW PROJECT <span className='btn-icon fade-out-right'></span></a>
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