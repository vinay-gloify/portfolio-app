import React from 'react';
import './YourTurn.css';

const YourTurn = () => {
    return (
        <section id='now-your-turn'>
            <div className='overlay pt-120 pb-120'>
                <div className='container wow fadeInUp'>
                    <div className='row'>
                        <div className='col-lg-7 binn' style={{ 'margin-top': '100px' }}>
                            <div className='section-header binned' style={{ 'margin-right': '590px' }}>
                                <h4 className='sub-title-alt'>Now Your Turn</h4>
                                <h3 className='title'>Interested in Working with Me?</h3>
                                <p>Do you need help with any web design or development project?
                                    Let me give you a hand. Get in touch with me and i will get back to
                                    you within 1-2 business days.</p>
                                <a href="/" className='cmn-btn'>Contact me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-area'>
                <img src="/now-your-turn-right.png" alt="image" />
            </div>
            <div className='bottom-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='single-item mt-5'>
                                <span className='counter'>18</span>
                                <h5>Happy Clients</h5>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='single-item second mt-5'>
                                <span className='counter'>5</span>
                                <h5>Years Experience</h5>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='single-item third mt-5'>
                                <span className='counter'>9</span>
                                <span>k</span>
                                <h5>Hours Worked</h5>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className='single-item fourth mt-5'>
                                <span className='counter'>1</span>
                                <h5>Awards Won</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default YourTurn;