import React, { useEffect } from 'react';
import './Make.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Make = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleClick = (path) => {
    window.location.href = path;
  };

  return (
    <section className="make-section" data-aos="fade-left">
      <h2 className="make-title">Make a Difference Today</h2>
      <p className="make-description">
        Join the Lions FSBM community and be part of a network of students committed to 
        service leadership and making a positive impact.
      </p>
      <div className="make-buttons" data-aos="fade-left" data-aos-delay="200">
        <button className="make-btn learn" onClick={() => handleClick('/about')}>Learn More</button>
        <button className="make-btn join" onClick={() => handleClick('/contact')}>Join Us</button>
      </div>
    </section>
  );
};

export default Make;
