import Footer from '../components/Footer/Footer.jsx';
import MainHero from '../components/MainHero/MainHero.jsx';
import Make from '../components/Make/Make.jsx';
import Mission from '../components/Mission/Mission.jsx';
import UpcomingEvents from '../components/UpcomingEvents/UpcomingEvents.jsx';


export default function Home() {
    let eventsList = [
      {
      img: {
        src: "https://placehold.co/600x400?text=Don+du+Sang",
        alt: "Don du Sang"
      },
      title: "Don du Sang",
      date: new Date(2025, 2, 15),
      startTime: new Date(0, 0, 0, 9, 0),
      endTime: new Date(0, 0, 0, 13, 0),
      location: "Faculté des Sciences Ben M'Sick",
      description: "Le CLUB LIONS FSBM organise le don du sang, un événement essentiel pour soutenir les besoins de notre communauté en produits sanguins...",
      link: "/evenements/don-du-sang.html"
    },
    {
      img: {
        src: "https://placehold.co/600x400?text=Dépistage+de+Diabète",
        alt: "Dépistage de Diabète"
      },
      title: "Dépistage de Diabète",
      date: new Date(2025, 3, 10),
      startTime: new Date(0, 0, 0, 10, 0),
      endTime: new Date(0, 0, 0, 16, 0),
      location: "Faculté des Sciences Ben M'Sick",
      description: "Notre CLUB LIONS FSBM organisera une action de dépistage du diabète destinée à sensibiliser le public...",
      link: "/evenements/depistage-diabete.html"
    },
    {
      img: {
        src: "https://placehold.co/600x400?text=Visite+Maison+de+Retraite",
        alt: "Visite de Maison de Retraite"
      },
      title: "Visite de Maison de Retraite",
      date: new Date(2025, 4, 20),
      startTime: new Date(0, 0, 0, 14, 0),
      endTime: new Date(0, 0, 0, 17, 0),
      location: "Maison de Retraite Al Amal",
      description: "Notre CLUB LIONS FSBM organisera une visite dans une maison de retraite pour apporter un moment de convivialité...",
      link: "/evenements/visite-maison-de-retraite.html"
    },
    ];

    return (
        <>
            <MainHero />
            <main>
              <Mission />
              <UpcomingEvents events={eventsList}/>
              <Make />
            </main>
            <Footer />
        </>
    )
}