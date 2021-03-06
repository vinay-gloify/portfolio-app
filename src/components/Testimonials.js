import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section id="testimonials">
            <div className="overlay pt-120 pb-120">
                <div className='container wow fadeInUp'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <div className='section-header text-center'>
                                <h4 className='sub-title'>What people say</h4>
                                <h3 className='title'>Trusted by brands all over the world</h3>
                                <p className='mt-5' >User-friendly web pages are our thing. I’ve also helped some
                                    awesome businesses with branding and custom solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mt-5'>
                        <div className='col-sm left-area '>
                            <img src="/testimonials-user.png" alt="img" />
                        </div>
                        <div className='col-sm text-area mt-5'>
                            <h3 className='righthead mb-4 fw-bold '>
                                Robert Wood has helped our business deliver
                                incredible results, leading success for our
                                UI & UX
                            </h3>
                            <p className='mb-4 mt-5 lrom'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, sapien sit amet scelerisque laoreet, eros justo congue neque, in maximus tellus velit vitae lacus.
                            </p>
                            <h4 className='righthead byron mb-4 mt-5'>Byron Burns <span>CEO @APPLE</span></h4>
                            {/* <span className='sgv mt-5'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="#a8a8a8" className="bi bi-arrow-left mx-3" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="#a8a8a8" className="bi bi-arrow-right mx-3" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </span> */}
                            <div className='d-flex mt-5 mb-5'>
                                <a href="/" className='cmn-btn-second rotate' >
                                    <span className='btn-icon'></span>
                                </a>
                                <a href="/" className='cmn-btn-second mx-5'>
                                    <span className='btn-icon'></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;