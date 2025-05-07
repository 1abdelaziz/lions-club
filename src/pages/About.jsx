import FeatureSection from "../components/FeatureSection/FeatureSection.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import SimpleHero from "../components/SimpleHero/SimpleHero.jsx";
import Team from "../components/Team/Team.jsx";
import OurHistory from "../components/OurHistory/OurHistory.jsx";


export default function() {
    const members = [
        {
          "memberName": "Younes EL OMRANI",
          "memberTitle": "Président",
          "img": {
            "src": "https://placehold.co/600x300",
            "alt": "Photo de Younes EL OMRANI"
          },
          "responsibilities": [
            "Représenter le club",
            "Coordonner les activités globales",
            "Prendre les décisions stratégiques"
          ]
        },
        {
          "memberName": "Hajar EL GUENDOUZI",
          "memberTitle": "Vice-Présidente",
          "img": {
            "src": "img/hajar.png",
            "alt": "Photo de Hajar EL GUENDOUZI"
          },
          "responsibilities": [
            "Assister le président",
            "Superviser les pôles",
            "Gérer les imprévus"
          ]
        },
        {
          "memberName": "Maroua BENNANI",
          "memberTitle": "Secrétaire Générale",
          "img": {
            "src": "img/maroua.png",
            "alt": "Photo de Maroua BENNANI"
          },
          "responsibilities": [
            "Gérer les documents officiels",
            "Rédiger les comptes rendus",
            "Assurer la communication interne"
          ]
        },
        {
          "memberName": "Mohammed EL MEHDI LAHLOU",
          "memberTitle": "Trésorier",
          "img": {
            "src": "img/mehdi.png",
            "alt": "Photo de Mohammed EL MEHDI LAHLOU"
          },
          "responsibilities": [
            "Gérer le budget",
            "Suivre les dépenses",
            "Rechercher des financements"
          ]
        },
        {
          "memberName": "Chaimae CHAYRI",
          "memberTitle": "Responsable Communication",
          "img": {
            "src": "img/chaimae.png",
            "alt": "Photo de Chaimae CHAYRI"
          },
          "responsibilities": [
            "Gérer les réseaux sociaux",
            "Créer le contenu",
            "Promouvoir les événements"
          ]
        },
        {
          "memberName": "Rania ZEKHNINI",
          "memberTitle": "Responsable Sponsoring",
          "img": {
            "src": "img/rania.png",
            "alt": "Photo de Rania ZEKHNINI"
          },
          "responsibilities": [
            "Contacter des sponsors",
            "Négocier des partenariats",
            "Assurer le suivi"
          ]
        },
        {
          "memberName": "Ghita MOUSTAKI",
          "memberTitle": "Responsable Projet",
          "img": {
            "src": "img/ghita.png",
            "alt": "Photo de Ghita MOUSTAKI"
          },
          "responsibilities": [
            "Planifier les projets",
            "Assurer leur bon déroulement",
            "Évaluer les résultats"
          ]
        },
        {
          "memberName": "Oumayma CHOUKRI",
          "memberTitle": "Responsable RSE",
          "img": {
            "src": "img/oumayma.png",
            "alt": "Photo de Oumayma CHOUKRI"
          },
          "responsibilities": [
            "Promouvoir les actions citoyennes",
            "Organiser des événements RSE",
            "Sensibiliser les membres"
          ]
        },
        {
          "memberName": "Youssef NAJIB",
          "memberTitle": "Responsable Logistique",
          "img": {
            "src": "img/youssef.png",
            "alt": "Photo de Youssef NAJIB"
          },
          "responsibilities": [
            "Gérer le matériel",
            "Organiser la logistique des événements",
            "Assurer le bon déroulement sur place"
          ]
        },
        {
          "memberName": "Oussama AZELMAT",
          "memberTitle": "Responsable Audiovisuel",
          "img": {
            "src": "img/oussama.png",
            "alt": "Photo de Oussama AZELMAT"
          },
          "responsibilities": [
            "Capturer les moments forts",
            "Créer du contenu visuel",
            "Monter les vidéos"
          ]
        }
    ]

    return (
        <>
            <Header />
            <SimpleHero
                title="Qui sommes-nous ?"
                paragraph="Le Lions Club FSBM est un groupe d'étudiants engagés, unis par le désir de servir, d’inspirer et de changer le monde qui les entoure. Nous croyons au pouvoir de l’action solidaire, de la culture et de l’éducation."
                ctaButton={true}
                ctaText="Découvrir notre mission"
                onclick={() => alert("Bienvenue parmi les lions 🦁 !")}
            />
            <main className="container">
                <FeatureSection
                    img={{ src: "https://placehold.co/600x400?text=Nos+Actions", alt: "Bénévoles du club en action", right: false }}
                    title="Nos Actions Solidaires"
                    paragraph="Le Lions Club FSBM s'engage activement dans des actions humanitaires, éducatives et sociales. Chaque membre contribue à faire une réelle différence dans la communauté."
                    ctaLink="https://lionsfsbm.vercel.app/actions"
                    ctaText="Voir nos actions"
                />
                <FeatureSection
                    img={{ src: "https://placehold.co/600x400?text=Rejoignez+Nous", alt: "Membres du club réunis", right: true }}
                    title="Rejoignez le Mouvement"
                    paragraph="Vous êtes étudiant à la FSBM et souhaitez avoir un impact positif ? Rejoignez-nous et participez à nos activités solidaires, culturelles et éducatives."
                    ctaButton={true}
                    ctaText="Je m'inscris"
                    onclick={() => alert("Merci pour votre intérêt !")}
                />
                <Team title="Notre Équipe Dirigeante" members={members}/>
                <OurHistory />
            </main>
            <Footer />
        </>
    )
}