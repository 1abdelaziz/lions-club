import React, { useEffect } from 'react';
import AOS from 'aos';
import '../assets/styles/Contact.css';
import Header from '../components/Header/Header';
import SimpleHero from '../components/SimpleHero/SimpleHero';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-page">
      <Header />
      <SimpleHero
        title="Libérez votre avenir financier"
        paragraph="Chez Lions FSBM, nous proposons des solutions financières innovantes, adaptées à vos besoins. Rejoignez-nous pour construire un avenir sûr et prospère."
        ctaText="En savoir plus"
        ctaButton={true}
        onclick={() => console.log("Bouton cliqué")}
      />


      {/* === CONTACT FORM & INFO === */}
      <section id="contact-section" className="contact-sections" data-aos="fade-up">
        <div className="contact-left">
          <h2 className="colored-title">
            <span className="blue">Get In </span><span className="yellow">Touch</span>
          </h2>
          <p>We'd love to hear from you! Whether you're interested in joining our club, partnering on projects,
            or just have questions, please reach out using the form or contact information below.
          </p>

          <div className="info-item">
            <i className="fas fa-map-marker-alt icon"></i>
            FSJES Ain Chock, Casablanca
          </div>
          <div className="info-item">
            <i className="fas fa-envelope icon"></i>
            contact@lionsfsbm.org
          </div>
          <div className="info-item">
            <i className="fas fa-phone icon"></i>
            +212 522 00 00 00
          </div>

          <h3 className="colored-title">
            <span className="blue">Follow </span><span className="yellow">Us</span>
          </h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f icon"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram icon"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter icon"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in icon"></i>
            </a>
          </div>
        </div>

        <div className="contact-right">
          <h2 className="colored-title">
            <span className="blue">Send Us a </span><span className="yellow">Message</span>
          </h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* === MAP SECTION === */}
      <section className="map-section" data-aos="fade-up">
  <h2 className="colored-title" data-aos="fade-up">
    <span className="blue">Our </span><span className="yellow">Location</span>
  </h2>
  <p data-aos="fade-up">Visit us at FSBM BEN MSICK, Casablanca.</p>
  <iframe
    title="Our Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.144244499187!2d-7.618819924442841!3d33.56164974454706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7ce3c489a4e1b%3A0x8286aa6e8bb90d6c!2sFSJES%20Ain%20Chock!5e0!3m2!1sfr!2sma!4v1715077000000!5m2!1sfr!2sma"
    width="100%"
    height="400"
    style={{ border: 0, borderRadius: '10px', marginTop: '20px' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</section>

    </div>
  );
};

export default Contact;