import React from 'react';
import { Logo } from '../images';
import './Navbar.css';

const Navbar = () => {
  return (
      <>
      {/* header-section start  */}
     <header id="header-section" className="animated fadeInDown header-fixed">
     <div className="overlay">
       <div className="container">
         <div className="header-area">
           <div className="logo-section flex-grow-1  align-items-center">
             <a className="site-logo site-title" href="/">
               <img src={Logo} alt="site-logo" />
             </a>
           </div>

            {/* Toggler bar */}
            <button
             className="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#navbarSupportedContent"
             aria-controls="navbarSupportedContent"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
             <i className="fas fa-bars"></i>
           </button>

           <nav className="navbar navbar-expand-lg p-0">
             <div
               className="navbar-collapse collapse"
               id="navbarSupportedContent"
             >
               <ul className="navbar-nav main-menu ml-auto">
                 <li>
                   <a href="/" className="active">
                     Home
                   </a>
                 </li>
                 <li>
                   <a href="/about-page">About</a>
                 </li>
                 <li>
                   <a href="/portfolio">Portfolio</a>
                 </li>
                 <li>
                   <a href="/products">Products</a>
                 </li>
                 <li className="menu_has_children">
                   <a href="#0">Pages</a>
                   <ul className="sub-menu">
                     <li>
                       <a href="/">Blog</a>
                     </li>
                     <li>
                       <a href="/">Blog Single</a>
                     </li>
                     <li>
                       <a href="/">Products Single</a>
                     </li>
                     <li>
                       <a href="/">Portfolio Details</a>
                     </li>
                     <li>
                       <a href="/">Pricing</a>
                     </li>
                     <li>
                       <a href="/">Cart</a>
                     </li>
                   </ul>
                 </li>
                 {/* cart area */}
                 <li className="cart-area">
                   <button className="cart-toggle cart">
                     Cart<span>2</span>
                   </button>
                 </li>
               </ul>
             </div>
           </nav>
           {/* Contact me Btn */}
           <div className="right-area header-action d-flex align-items-center">
             <a href="/" className="cmn-btn">
               Contact Me
             </a>
           </div>
          
         </div>
       </div>
     </div>
   </header>
 </>
  );
};

export default Navbar;
