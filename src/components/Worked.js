import React from 'react';
import { Brand1, Brand2, Brand3, Brand4 } from '../images';
import './Worked.css';

const Worked = () => {
  return (
    <section id="worked-with" className="mt-5 mb-5">
      <div className='container'>
        <div className='main-content wow fadeInUp'>
          <h2>I Worked With</h2>

          <div className="slider">
            <div className="slide-track">
              <div className="slide">
                <img src={Brand1} alt="img" />
              </div>
              <div className="slide">
                <img src={Brand2} alt="img" />
              </div>
              <div className="slide">
                <img src={Brand3} alt="img" />
              </div>
              <div className="slide">
                <img src={Brand4} alt="img" />
              </div>
              <div className="slide">
                <img src={Brand1} alt="img" />
              </div>
              <div className="slide">
                <img src={Brand2} alt="img" />
              </div>
              <div className="slide">
                <img src={Brand3} alt="img" />
              </div>
              <div className="slide">
                <img src={Brand4} alt="img" />
              </div>
              <div className="slide">
                <img src={Brand1} alt="img" />
              </div>
              <div className="slide">
                <img src={Brand2} alt="img" />
              </div>
              <div className="slide">
                <img src={Brand3} alt="img" />
              </div>
              <div className="slide">
                <img src={Brand4} alt="img" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


export default Worked;
// {/* <div className='worked-carousel slick-initialized slick-slider'>
//   <div className='slick-list draggable'>
//     <div className='slick-track d-flex justify-content-center'>
//       <div className='slick-slide'>
//         <div>
//           <div className='single-item'>
//             <img src={Brand1} alt="img" />
//           </div>
//         </div>
//       </div>
//       <div className='slick-slide'>
//         <div>
//           <div className='single-item'>
//             <img src={Brand2} alt="img" />
//           </div>
//         </div>
//       </div>
//       <div className='slick-slide'>
//         <div>
//           <div className='single-item'>
//             <img src={Brand3} alt="img" />
//           </div>
//         </div>
//       </div>
//       <div className='slick-slide'>
//         <div>
//           <div className='single-item'>
//             <img src={Brand4} alt="img" />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div> */}
