import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../assets/styles/index.css';

import Footer from '../components/Footer/Footer.jsx';
import MainHero from '../components/MainHero/MainHero.jsx';
import Make from '../components/Make/Make.jsx';
import Mission from '../components/Mission/Mission.jsx';


export default function Home() {
    return (
        <>
            <MainHero />
            <Mission />
            <Make />
            <Footer />
        </>
    )
}