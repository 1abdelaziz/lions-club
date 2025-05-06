import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Nav from '../Nav/Nav.jsx';
import './Header.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [showScrollUp, setShowScrollUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleShowScrollUp = () => {
            setShowScrollUp(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleShowScrollUp);
        return () => window.removeEventListener('scroll', handleShowScrollUp);
    }, []);
    

    function onToggleNav() {
        setScrolled(true);
    }

    function scrollUp() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <header className={`fixed-top ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
            <Nav scrolled={scrolled} onToggleNav={onToggleNav} />

            <button type='button' className={`back-top-btn btn btn-warning ${showScrollUp ? 'show' : ''}`} onClick={scrollUp} >
                <FaArrowUp />
            </button>
        </header>
    );
}