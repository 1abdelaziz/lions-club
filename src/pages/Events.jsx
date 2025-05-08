import { useState } from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';
import SimpleHero from '../components/SimpleHero/SimpleHero.jsx';
import EventsContainer from '../components/EventsContainer/EventsContainer.jsx';
import ToolBar from '../components/ToolBar/ToolBar.jsx';
import PromoBanner from '../components/PromoBanner/PromoBanner.jsx';

export default function Events() {
  const bannerObject = {
    "title": "Avez-vous une idée d'événement?",
    "paragraph": "Nous accueillons avec plaisir les suggestions d'événements de la part des étudiants et des professeurs. Si vous avez une idée d'événement ou si vous souhaitez collaborer avec nous, faites-le nous savoir!",
    "button": {
      "text": "Soumettre une proposition d'événement",
      "onClick": () => console.log("hello")
    }
  };

  const events = [
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
      {
        img: {
          src: "https://placehold.co/600x400?text=Opération+Vêtements+Chauds",
          alt: "Opération Vêtements Chauds et Caravane Sociale"
        },
        title: "Opération Vêtements Chauds et Caravane Sociale",
        date: new Date(2025, 10, 25),
        startTime: new Date(0, 0, 0, 9, 0),
        endTime: new Date(0, 0, 0, 17, 0),
        location: "Quartiers défavorisés de Casablanca",
        description: "Notre club organise une Opération Vêtements Chauds et Caravane Sociale. Cette initiative a pour but d'apporter chaleur...",
        link: "/evenements/operation-vetements-chauds.html"
      },
      {
        img: {
          src: "https://placehold.co/600x400?text=Journée+Mondiale+de+la+Femme",
          alt: "Opération Journée Mondiale de la Femme"
        },
        title: "Opération Journée Mondiale de la Femme",
        date: new Date(2025, 2, 8),
        startTime: new Date(0, 0, 0, 10, 0),
        endTime: new Date(0, 0, 0, 16, 0),
        location: "Faculté des Sciences Ben M'Sick",
        description: "Le 08 Mars 2025, à l'occasion de la Journée Mondiale de la Femme, notre club est fier d'organiser une série d'activités...",
        link: "/evenements/journee-femme.html"
      },
      {
        img: {
          src: "https://placehold.co/600x400?text=Opération+Cancer+d'Enfant",
          alt: "Opération du Cancer d'Enfant"
        },
        title: "Opération du Cancer d'Enfant",
        date: new Date(2025, 5, 1),
        startTime: new Date(0, 0, 0, 10, 0),
        endTime: new Date(0, 0, 0, 14, 0),
        location: "Hôpital Pédiatrique de Casablanca",
        description: "Notre club s'engage à apporter du réconfort et de la joie aux enfants atteints de cancer à travers une visite chaleureuse...",
        link: "/evenements/cancer-enfant.html"
      },
      {
        img: {
          src: "https://placehold.co/600x400?text=Panier+Ramadan",
          alt: "Opération Panier Ramadan"
        },
        title: "Opération Panier Ramadan",
        date: new Date(2025, 3, 1),
        startTime: new Date(0, 0, 0, 9, 0),
        endTime: new Date(0, 0, 0, 17, 0),
        location: "Quartiers défavorisés de Casablanca",
        description: "À l'occasion du mois sacré de Ramadan, notre club lance l'Opération Panier Ramadan pour apporter aide et soutien...",
        link: "/evenements/panier-ramadan.html"
      },
      {
        img: {
          src: "https://placehold.co/600x400?text=Rénovation+Mosquée",
          alt: "Rénovation d'une Mosquée"
        },
        title: "Rénovation d'une Mosquée",
        date: new Date(2025, 6, 15),
        startTime: new Date(0, 0, 0, 9, 0),
        endTime: new Date(0, 0, 0, 17, 0),
        location: "Mosquée Al Nour, Casablanca",
        description: "Notre club entreprend la rénovation d'une mosquée locale afin de préserver ce lieu de culte et de rassemblement communautaire...",
        link: "/evenements/renovation-mosquee.html"
      },
      {
        img: {
          src: "https://placehold.co/600x400?text=Sensibilisation+Bucco-Dentaire",
          alt: "Sensibilisation Bucco-Dentaire"
        },
        title: "Sensibilisation Bucco-Dentaire",
        date: new Date(2025, 5, 20),
        startTime: new Date(0, 0, 0, 10, 0),
        endTime: new Date(0, 0, 0, 15, 0),
        location: "Écoles primaires de Casablanca",
        description: "Dans le cadre de notre mission de sensibilisation, notre club organise une journée dédiée à l’hygiène bucco-dentaire...",
        link: "/evenements/sensibilisation-bucco-dentaire.html"
      },
      {
        img: {
          src: "https://placehold.co/600x400?text=Soutien+Scolaire",
          alt: "Soutien Scolaire"
        },
        title: "Soutien Scolaire",
        date: new Date(2025, 1, 10),
        startTime: new Date(0, 0, 0, 14, 0),
        endTime: new Date(0, 0, 0, 17, 0),
        location: "Écoles de quartier Ben M’Sick",
        description: "Notre club organise des sessions de soutien scolaire destinées aux élèves en difficulté...",
        link: "/evenements/soutien-scolaire.html"
      },
      {
        img: {
          src: "https://placehold.co/600x400?text=Sensibilisation+à+l'Environnement",
          alt: "Sensibilisation à l'Environnement"
        },
        title: "Sensibilisation à l'Environnement",
        date: new Date(2025, 4, 5),
        startTime: new Date(0, 0, 0, 10, 0),
        endTime: new Date(0, 0, 0, 13, 0),
        location: "Faculté des Sciences Ben M’Sick",
        description: "À l’occasion de la Journée Mondiale de l’Environnement, notre club met en œuvre une action de sensibilisation écologique...",
        link: "/evenements/sensibilisation-environnement.html"
      },
      {
        img: {
          src: "https://placehold.co/600x400?text=Activité+Enfants+Orphelins",
          alt: "Activité avec les Enfants Orphelins"
        },
        title: "Activité avec les Enfants Orphelins",
        date: new Date(2025, 6, 10),
        startTime: new Date(0, 0, 0, 10, 0),
        endTime: new Date(0, 0, 0, 16, 0),
        location: "Orphelinat Dar Al Atfal",
        description: "Nous organisons une journée spéciale d’activités ludiques, éducatives et artistiques avec les enfants orphelins...",
        link: "/evenements/activite-enfants-orphelins.html"
      },
      {
        img: {
          src: "https://placehold.co/600x400?text=Visite+Hôpital+Enfants",
          alt: "Visite à l’Hôpital des Enfants"
        },
        title: "Visite à l’Hôpital des Enfants",
        date: new Date(2025, 2, 25),
        startTime: new Date(0, 0, 0, 11, 0),
        endTime: new Date(0, 0, 0, 14, 0),
        location: "Hôpital 20 Août - Casablanca",
        description: "Le Club Lions FSBM se rend auprès des enfants hospitalisés pour leur apporter soutien moral et réconfort...",
        link: "/evenements/visite-hopital-enfants.html"
      }
  ];

  const [filteredEvents, setFilteredEvents] = useState(events);
  
  const [toolBarButtons, setToolBarButtons] = useState([      
    {
      text: "Tous les événements",
      selected: true,
      onSelect: () => {handleOnSelect(0); }
    },
    {
      text: "Événements à venir",
      selected: false,
      onSelect: () => {handleOnSelect(1); }
    },
    {
      text: "Événements passés",
      selected: false,
      onSelect: () => {handleOnSelect(2); }
    },
  ])


  function onSearchChange(e) {
    console.log("on change"); 
    const input = e.currentTarget.value.toLowerCase();
    setFilteredEvents(events.filter(event => 
      event.title.toLowerCase().includes(input) || event.description.toLowerCase().includes(input)
    ));
  }

  function handleOnSelect(index) {
    const newToolBarButtons = toolBarButtons.map((toolBarButton, i) => {
      if(i == index)
        return {...toolBarButton, selected: true};
      return {...toolBarButton, selected: false};
    });

    setToolBarButtons(newToolBarButtons);

    switch(index) {
      case 0:
        setFilteredEvents(events);
        break;
      case 1:
        setFilteredEvents(events.filter(event => event.date > new Date()));
        break;
      case 2:
        setFilteredEvents(events.filter(event => event.date <= new Date()));
        break;
      default:
        console.error(`Error in index switch: index ${index} does not correspond to any case.`);
    }
  }
    
  return (
      <>
          <Header />
          <SimpleHero
              title="Participez à nos événements"
              paragraph="Rejoignez-nous lors de nos prochains événements pour en apprendre davantage sur la finance, élargir votre réseau et vivre des expériences uniques avec Lions FSBM."
              ctaText="Voir les événements"
              ctaButton={true}
              onclick={() => console.log("Redirection vers les événements")}
          />
          <ToolBar 
            search={{name: "Trouvez des événements", id: "search-event", placeholder: "Trouvez des événements", onChange: onSearchChange}}
            buttons={toolBarButtons}
          />

          {filteredEvents.length > 0 ? (
            <EventsContainer events={filteredEvents} />
          ):  
          <p className='container text-center fw-bold no-events'>
            Aucun événement ne correspond aux critères de filtrage actuels. 
            Veuillez effacer les filtres pour afficher tous les événements.
          </p>}

          <PromoBanner {...bannerObject}/>
          <Footer />
      </>
  )
}