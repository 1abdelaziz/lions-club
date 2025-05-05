import './Nav.css';
import logo from '../../assets/images/logo.png';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <div className="ms-auto">
                    <img src={logo} alt="Logo Lions" width="130" />
                </div>
                <a className="navbar-brand me-auto" href="#">logo</a>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">logo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a href="#" className="nav-link mx-lg-2">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link mx-lg-2">Membres</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link mx-lg-2">Événements</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link mx-lg-2">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="#" className="regonidre-button">Rejoindre le club</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}
