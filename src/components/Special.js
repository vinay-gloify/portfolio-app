import React from 'react';
import './Special.css';

const Special = () => {
    return (
        <section id="specilizing-section">
            <div className='overlay pt-120 pb-120'>
                <div className='container wow fadeInUp'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-lg-6'>
                            <div className='section-header'>
                                <h4 className='sub-title' style={{ "font-family": "now", "font-weight": "500" }}>What I Do</h4>
                                <h3 className='title' style={{ "font-family": "now", "font-weight": "900" }}>Specilizing In</h3>
                                <p style={{ "font-family": "now", "font-weight": "400" }}>Sed tempus sapien in nisi auctor lacinia. Donec metus felis, ultricies nec pharetra volutpat</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6'>
                            <div className='single-item'>
                                <img src="/specilizing-icon1.png" alt="" />
                                <a href="/">
                                    <h2 style={{ "font-family": "now", "font-weight": "900" }}>Design and UI/UX</h2>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className='single-item'>
                                <img src="/specilizing-icon2.png" alt="" />
                                <a href="/">
                                    <h2 style={{ "font-family": "now", "font-weight": "900" }}>Web design & development</h2>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className='single-item'>
                                <img src="/specilizing-icon3.png" alt="" />
                                <a href="/">
                                    <h2 style={{ "font-family": "now", "font-weight": "900" }}>Custom Solutions</h2>
                                </a>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6'>
                            <div className='single-item'>
                                <img src="/specilizing-icon4.png" alt="" />
                                <a href="/">
                                    <h2 style={{ "font-family": "now", "font-weight": "900" }}>Animations Video ads</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Special;