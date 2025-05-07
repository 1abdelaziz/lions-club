import FeatureSection from "../components/FeatureSection/FeatureSection.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import SimpleHero from "../components/SimpleHero/SimpleHero.jsx";


export default function() {
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

            </main>
            <Footer />
        </>
    )
}