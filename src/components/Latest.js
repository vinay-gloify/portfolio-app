import React from 'react';
import { LastProject1, LastProject2, LastProject3, SocialIcon1, SocialIcon2, SocialIcon3 } from '../images';
import './Latest.css';

const Latest = () => {
    return (
        <section id="latest-project">
        <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-6">
                        <div className="section-header">
                            <h4 className="sub-title">Portfolios</h4>
                            <h3 className="title">Latest Projects</h3>
                            <p>User-friendly web pages are our thing. I’ve also helped some
                                awesome businesses with branding and custom solutions.</p>
                        </div>
                    </div>
                </div>
                <div className="single-item">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-5 col-md-5 d-flex align-items-center">
                            <div className="text-area">
                                <h5>Product Design</h5>
                                <a href="/"><h2>Mobile App Redesign</h2></a>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Viverra sed iaculis ornare duis.</p>
                                <a href="/" className="cmn-btn-second">View Case Study
                                    <span className="btn-icon"></span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 d-flex align-items-center">
                            <div className="right-area">
                                <img src={LastProject1} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-item">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-7 col-md-7 d-flex align-items-center">
                            <div className="right-area mid">
                                <img src={LastProject2} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 d-flex align-items-center">
                            <div className="text-area">
                                <h5 className="mid">UI/UX Design</h5>
                                <a href="/"><h2>Mobile App Design</h2></a>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Viverra sed iaculis ornare duis.</p>
                                <a href="/" className="cmn-btn-second">View Case Study
                                    <span className="btn-icon"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-item">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-5 col-md-5 d-flex align-items-center">
                            <div className="text-area">
                                <h5 className="last">Web Design</h5>
                                <a href="/"><h2>Website Design</h2></a>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Viverra sed iaculis ornare duis.</p>
                                <a href="/" className="cmn-btn-second">View Case Study
                                    <span className="btn-icon"></span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 d-flex align-items-center">
                            <div className="right-area">
                                <img src={LastProject3} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="bottom-area">
                            <h2>like what you see? <span>follow me</span> and
                                discover more great  designs</h2>
                            <div className="social d-flex justify-content-center">
                                <a href="/" className="single-icon dribbble"><img src={SocialIcon1} alt="social" /></a>
                                <a href="/" className="single-icon instagram"><img src={SocialIcon2} alt="social" /></a>
                                <a href="/" className="single-icon behance"><img src={SocialIcon3} alt="social" /></a>
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