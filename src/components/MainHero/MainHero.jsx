import Header from '../Header/Header.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import './MainHero.css';

import heroVideo from '../../assets/videos/hero.mp4';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';

export default function MainHero() {
  let carouselSlides = [
    {
      isImg: true,
      img: { src: image1, alt: 'cancer_enfant' },
      active: true,
      title: 'Ensemble, agissons pour la vie',
      caption: 'Soutenir les enfants atteints de cancer en leur offrant espoir et assistance médicale.',
      button: {
        class: 'btn btn-warning fw-bold px-4',
        onClick: () => console.log('Rejoindre'),
        buttonText: 'Rejoindre'
      }
    },
    {
      isImg: true,
      img: { src: image2, alt: 'Plantation' },
      active: false,
      title: 'Cultivons un avenir durable',
      caption: 'Engagés dans la reforestation et la sensibilisation à l’environnement pour un monde plus vert.',
      button: {
        class: 'btn btn-warning fw-bold px-4',
        onClick: () => console.log('En savoir plus'),
        buttonText: 'En savoir plus'
      }
    },
    {
      isImg: true,
      img: { src: image3, alt: 'rénovation_mosquée' },
      active: false,
      title: 'Préservons notre patrimoine',
      caption: 'Rénovation de lieux de culte pour renforcer les liens communautaires et culturels.',
      button: {
        class: 'btn btn-warning fw-bold px-4',
        onClick: () => console.log('Contact'),
        buttonText: 'Contact'
      }
    },
    {
      isImg: false,
      video: { src: heroVideo, type: 'video/mp4' },
      active: false,
      title: 'Découvrez notre engagement',
      caption: 'Plongez dans notre histoire et nos actions au service de la communauté.',
      button: {
        class: 'btn btn-warning fw-bold px-4',
        onClick: () => console.log('En savoir plus'),
        buttonText: 'En savoir plus'
      }
    }
  ];
  

    return (
      <div className='main-hero'>
        <Header />
        <Carousel id="hero-carousel" carouselSlides={carouselSlides} ride="carousel" />
      </div>
        
    )
}