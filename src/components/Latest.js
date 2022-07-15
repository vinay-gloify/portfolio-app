import React from 'react';
import './Latest.css';

const Latest = () => {
    return (
        <section id="latest-project">
            <div className="overlay pt-120 pb-120">
                <div className='container wow fadeInUp'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6'>
                            <div className='section-header'>
                                <h4 className='sub-title' style={{ "font-family": "now", "font-weight": "500" }}>Portfolios</h4>
                                <h3 className='title' style={{ "font-family": "now", "font-weight": "900" }}>Latest Projects</h3>
                                <p style={{ "font-family": "now", "font-weight": "400" }}>User-friendly web pages are our thing. I’ve also helped some
                                    awesome businesses with branding and custom solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className='single-item'>
                        <div className='row xing d-flex justify-content-between'>
                            <div className='col'>
                                <div className='text-area'>
                                    <h5 style={{ "font-family": "now", "font-weight": "500" }}>Product Design</h5>
                                    <a href="/"><h2 style={{ "font-family": "now", "font-weight": "900" }}>Mobile App Redesign</h2></a>
                                    <p style={{ "font-family": "now", "font-weight": "400" }}>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Viverra sed iaculis ornare duis.</p>
                                    <a href="/" className='cmn-btn-second' style={{ "font-family": "now", "font-weight": "500" }}>View Case Study
                                        <span className='btn-icon'></span>
                                    </a>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='right-area'>
                                    <img src="/latest-project1.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='single-item'>
                        <div className='row xing d-flex justify-content-between'>
                            <div className='col d-flex align-items-center'>
                                <div className='right-area mid'>
                                    <img src="/latest-project2.png" alt="img" />
                                </div>
                            </div>
                            <div className='col d-flex align-items-center'>
                                <div className='text-area'>
                                    <h5 className='mid' style={{ "font-family": "now", "font-weight": "500" }}>UI/UX Design</h5>
                                    <a href="/"><h2 style={{ "font-family": "now", "font-weight": "900" }}>Mobile App Design</h2></a>
                                    <p style={{ "font-family": "now", "font-weight": "400" }}>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Viverra sed iaculis ornare duis.</p>
                                    <a href="/" className='cmn-btn-second style={{ "font-family": "now", "font-weight": "500" }}'>
                                        View Case Study
                                        <span className='btn-icon'></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='single-item'>
                        <div className='row xing d-flex justify-content-between'>
                            <div className='col d-flex align-items-center'>
                                <div className='text-area'>
                                    <h5 className='last' style={{ "font-family": "now", "font-weight": "500" }}>Web Design</h5>
                                    <a href="/">
                                        <h2 style={{ "font-family": "now", "font-weight": "900" }}>Website Design</h2>
                                    </a>
                                    <p style={{ "font-family": "now", "font-weight": "400" }}>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Viverra sed iaculis ornare duis.</p>
                                    <a href="/" className='cmn-btn-second' style={{ "font-family": "now", "font-weight": "500" }}>View Case Study
                                        <span className='btn-icon'></span>
                                    </a>
                                </div>
                            </div>
                            <div className='col d-flex align-items-center'>
                                <div className='right-area'>
                                    <img src="/latest-project3.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center' style={{ "margin-top": "-250px" }}>
                        <div className='col-lg-6 text-center'>
                            <div className='bottom-area'>
                                <h2>
                                    like what you see? <span>follow me</span> and
                                    discover more great  designs
                                </h2>
                                <div className='social d-flex justify-content-center mb-5'>
                                    <a href="/" className='single-icon dribbble'>
                                        <img src="/social-Icon1.png" alt="social" />
                                    </a>
                                    <a href="/" className='single-icon instagram'>
                                        <img src="/social-Icon2.png" alt="social" />
                                    </a>
                                    <a href="/" className='single-icon behance'>
                                        <img src="/social-Icon3.png" alt="social" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Latest;