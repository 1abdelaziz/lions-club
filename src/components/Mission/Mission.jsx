import './Mission.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGlobe, FaTools, FaUsers } from 'react-icons/fa';

export default function Mission() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: false });
  }, []);

  return (
    <section className="mission-section" data-aos="fade-left">
      <h2 className="mission-title">Our Mission</h2>
      <p className="mission-description">
        Lions FSBM is dedicated to empowering students at FSJES Ain Chock to develop leadership skills and create positive impact through community service. We believe in the power of collective action to address local challenges and foster a spirit of volunteerism among the youth.
      </p>

      <div className="mission-cards">
        <div className="mission-card" data-aos="fade-left" data-aos-delay="100">
          <FaGlobe className="mission-icon" />
          <h3>Community Service</h3>
          <p>We organize initiatives that address local needs and create positive change in our community.</p>
        </div>
        <div className="mission-card" data-aos="fade-left" data-aos-delay="200">
          <FaTools className="mission-icon" />
          <h3>Leadership Development</h3>
          <p>We provide opportunities for students to develop skills in leadership, teamwork, and communication.</p>
        </div>
        <div className="mission-card" data-aos="fade-left" data-aos-delay="300">
          <FaUsers className="mission-icon" />
          <h3>Networking</h3>
          <p>We connect students with professionals, alumni, and other Lions Clubs to expand their horizons.</p>
        </div>
      </div>
    </section>
  );
}