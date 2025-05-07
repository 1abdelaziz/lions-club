import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import logo from '../../assets/images/logo.png';
import './Footer.css';

export default function Footer() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <footer className="bg-dark text-white pt-5 pb-3" data-aos="fade-up">
            <div className="container">
                <div className="row g-5">
                    {/* Lions Club Section */}
                    <section className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
                        <div className='d-flex align-items-center mb-3'>
                            <img src={logo} alt='Lions Club logo' className='me-2' width={'60'} />
                            <h3 className='mb-0'><span className='text-warning'>Lions</span> <span className='text-light'>Club</span></h3>
                        </div>
                        <p className='text-white mb-4'>
                            Le club Lions FSBM se consacre à servir la communauté par le biais du leadership, 
                            de l'innovation, des opportunités, du réseautage et du service.
                        </p>
                        <div className='d-flex'>
                            <a href="https://www.facebook.com" className="text-white link me-3"><FaFacebook className='fs-5'/></a>
                            <a href="https://www.instagram.com" className="text-white link me-3"><FaInstagram className='fs-5'/></a>
                            <a href="https://www.twitter.com" className="text-white link me-3"><FaTwitter className='fs-5'/></a>
                            <a href="https://www.linkedin.com" className="text-white link"><FaLinkedin className='fs-5'/></a>
                        </div>
                    </section>

                    {/* Quick Links Section */}
                    <section className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h3 className='text-warning mb-4 h5'>Liens Rapides</h3>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><a href="/index.html" className="text-white text-decoration-none link">Accueil</a></li>
                            <li className='mb-2'><a href="/index.html" className="text-white text-decoration-none link">À propos</a></li>
                            <li className='mb-2'><a href="/index.html" className="text-white text-decoration-none link">Événements</a></li>
                            <li className='mb-2'><a href="/index.html" className="text-white text-decoration-none link">Contact</a></li>
                        </ul>
                    </section>

                    {/* Contact Section */}
                    <section className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                        <h3 className='text-warning mb-4 h5'>Contact</h3>
                        <address>
                            <ul className='list-unstyled'>
                                <li className='mb-3 d-flex'>
                                    <FaMapMarkerAlt className='text-warning me-2 mt-1' />
                                    <span className=''>Faculté des Sciences Ben M'Sik Casablanca, Maroc</span>     
                                </li>
                                <li className='mb-3 d-flex'>
                                    <FaEnvelope className='text-warning me-2 mt-1' />
                                    <a href="mailto:lionsclubfsbm@gmail.com" className='text-white text-decoration-none link'>lionsclubfsbm@gmail.com</a>    
                                </li>
                                <li className='d-flex'>
                                    <FaPhone className='text-warning me-2 mt-1' />
                                    <a href="tel:+212612345678" className='text-white text-decoration-none link'>+212612345678</a>  
                                </li>
                            </ul>
                        </address>
                    </section>

                    {/* Important Section */}
                    <section className="col-lg-3 col-md-6">
                        <h3 className='text-warning mb-4 h5'>Important</h3>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><a href="#" className="text-white text-decoration-none link">Événements à venir</a></li>
                            <li className='mb-2'><a href="#" className="text-white text-decoration-none link">Rejoignez-nous</a></li>
                            <li className='mb-2'><a href="#" className="text-white text-decoration-none link">Faire un don</a></li>
                        </ul>
                    </section>
                </div>
                
                <hr className='my-4 bg-light' />
                
                <div className="text-center ">
                    <p className="mb-0">© {new Date().getFullYear()} Lions Club FSBM. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}