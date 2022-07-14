import React from 'react';
import { Brand1, Brand2, Brand3, Brand4 } from '../images';
import './Worked.css';

const Worked = () => {
  return (
    <section id="worked-with" className="mt-5 mb-5">
      <div className='container'>
        <div className='main-content wow fadeInUp'>
          <h2>I Worked With</h2>
          <div className='worked-carousel slick-initialized slick-slider'>
            <div className='slick-list draggable'>
              <div className='slick-track d-flex justify-content-center'>
                <div className='slick-slide text-center'>
                  <div>
                    <div className='single-item py-3'>
                      <img src={Brand1} alt="img" />
                    </div>
                  </div>
                </div>
                <div className='slick-slide text-center'>
                  <div>
                    <div className='single-item py-3'>
                      <img src={Brand2} alt="img" />
                    </div>
                  </div>
                </div>
                <div className='slick-slide text-center'>
                  <div>
                    <div className='single-item py-3'>
                      <img src={Brand3} alt="img" />
                    </div>
                  </div>
                </div>
                <div className='slick-slide text-center'>
                  <div>
                    <div className='single-item py-3'>
                      <img src={Brand4} alt="img" />
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