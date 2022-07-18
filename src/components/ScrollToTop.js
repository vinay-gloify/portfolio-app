import React, { useState } from 'react';
import './ScrollToTop.css';

const ScrollButton = () => {

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button className="scrollToTop active bg-light" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} >
      <i class="fas fa-angle-double-up"></i>
    </button>

  )
}

export default ScrollButton;