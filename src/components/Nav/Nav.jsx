import logo from '../../assets/images/logo.png';
import './Nav.css';

export default function Nav(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light    ${props.scrolled ? 'py-2' : 'py-2'}`}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Lions Club" width="80" className="me-2" />
                    <span className={`d-lg-inline fs-4 ${props.scrolled ? 'text-dark' : 'text-white'}`}>
                        Lions <span className="text-warning">Club</span>
                    </span>
                </a>

                <button 
                    className="navbar-toggler text-dark" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarContent"
                    onClick={props.onToggleNav}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <NavLink href="#" text="Accueil" scrolled={props.scrolled} />
                        <NavLink href="#about" text="À propos" scrolled={props.scrolled} />
                        <NavLink href="#events" text="Événements" scrolled={props.scrolled} />
                        <NavLink href="#contact" text="Contact" scrolled={props.scrolled} />
                    </ul>
                    <a href="#join" className="btn btn-warning fw-bold px-4">
                        Rejoindre
                    </a>
                </div>
            </div>
        </nav>
    );
}

function NavLink(props) {
    return (
        <li className="nav-item mx-2">
            <a href={props.href} className={`nav-link ${props.scrolled ? 'text-dark' : 'text-white'}`}>
                {props.text}
            </a>
        </li>
    );
}
