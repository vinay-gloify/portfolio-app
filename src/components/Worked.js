import React from 'react';
import './Worked.css';

const Worked = () => {
  return (
    <section id="worked-with" className="mt-5 mb-5">
      <div className='container'>
        <div className='main-content wow fadeInUp'>
          <h2>I Worked With</h2>
          <div className='worked-carousel slick-initialized slick-slider'>
            <div className='slick-list draggable'>
              <div className='slick-track d-flex'>
                <div className='slick-slide text-center mx-5' style={{ width: '200px' }}>
                  <div>
                    <div className='single-item'>
                      <img src="/brand-1.png" alt="image" />
                    </div>
                  </div>
                </div>
                <div className='slick-slide text-center mx-5' style={{ width: '200px' }}>
                  <div>
                    <div className='single-item'>
                      <img src="/brand-2.png" alt="image" />
                    </div>
                  </div>
                </div>
                <div className='slick-slide text-center mx-5' style={{ width: '200px' }}>
                  <div>
                    <div className='single-item'>
                      <img src="/brand-3.png" alt="image" />
                    </div>
                  </div>
                </div>
                <div className='slick-slide text-center mx-5' style={{ width: '200px' }}>
                  <div>
                    <div className='single-item'>
                      <img src="/brand-4.png" alt="image" />
                    </div>
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

export default Worked;