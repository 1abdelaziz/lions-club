import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import './Team.css';

export default function Team(props) {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <section className="team-members py-5" data-aos="fade-up">
            <div className="container">
                <h2 className="text-center mb-5" data-aos="fade-up" data-aos-delay="300">{props.title}</h2>

                <div className="row justify-content-center">
                    {props.members.map((member, index) => (
                        <div className="col-sm-12 col-md-4 col-lg-3 mb-4" key={index} data-aos="fade-up" data-aos-delay={(index + 1) * 10}>
                            <MemberCard {...member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function MemberCard(props) {
    return (
        <div className="member-card card h-100 text-center">
            <img
                src={props.img.src}
                alt={props.img.alt}
                className="card-img-top image-rounded my-3 mx-auto"
            />

            <div className="card-body d-flex flex-column">
                <h3 className="card-title">{props.memberName}</h3>
                <h6 className="card-subtitle mb-3 text-muted">{props.memberTitle}</h6>

                {props.responsibilities && (
                    <ul className="list-group list-group-flush text-start mt-auto">
                        {props.responsibilities.map((resp, i) => (
                            <li className="list-group-item" key={i}>
                                {resp}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="card-footer bg-white d-flex justify-content-center">
                <a href={props.linkedin} className='link text-dark' target="_blank"><FaLinkedin className="mx-3" /></a>
                <a href={props.facebook} className='link text-dark' target="_blank"><FaFacebook className="mx-3" /></a>
                <a href={props.instagram} className='link text-dark' target="_blank"><FaInstagram className="mx-3" /></a>
                <a href={props.twitter} className='link text-dark' target="_blank"><FaTwitter className="mx-3" /></a>
            </div>
        </div>
    );
}

