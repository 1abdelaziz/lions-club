import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../assets/styles/index.css';

import Footer from '../components/Footer/Footer.jsx';
import MainHero from '../components/MainHero/MainHero.jsx';
import Make from '../components/Make/Make.jsx';
import Mission from '../components/Mission/Mission.jsx';
import UpcomingEvents from '../components/UpcomingEvents/UpcomingEvents.jsx';


export default function Home() {
    let eventsList = [
        {
          img: {
            src: "https://placehold.co/400x200?text=Tech+Conference",
            alt: "Tech Conference"
          },
          title: "Annual Tech Conference",
          date: new Date(2023, 10, 15), // November 15, 2023
          startTime: new Date(0, 0, 0, 9, 0), // 09:00
          endTime: new Date(0, 0, 0, 17, 0), // 17:00
          location: "Paris Convention Center",
          description: "Join us for the biggest tech event of the year featuring keynote speakers, workshops, and networking opportunities with industry leaders.",
          link: "#"
        },
        {
          img: {
            src: "https://placehold.co/400x200?text=Music+Festival",
            alt: "Music Festival"
          },
          title: "Summer Music Festival",
          date: new Date(2023, 6, 22), // July 22, 2023
          startTime: new Date(0, 0, 0, 14, 0), // 14:00
          endTime: new Date(0, 0, 0, 23, 0), // 23:00
          location: "Parc des Princes, Paris",
          description: "A day full of amazing performances from top international artists across multiple stages. Food trucks and activities available.",
          link: "#"
        },
        {
          img: {
            src: "https://placehold.co/400x200?text=Art+Exhibition",
            alt: "Art Exhibition"
          },
          title: "Modern Art Exhibition",
          date: new Date(2023, 8, 5), // September 5, 2023
          startTime: new Date(0, 0, 0, 10, 0), // 10:00
          endTime: new Date(0, 0, 0, 18, 0), // 18:00
          location: "Louvre Museum",
          description: "Explore contemporary artworks from emerging French artists. Curated collection showcasing innovative techniques and themes.",
          link: "#"
        }
    ];

    return (
        <>
            <MainHero />
            <Mission />
            <UpcomingEvents events={eventsList}/>
            <Make />
            <Footer />
        </>
    )
}