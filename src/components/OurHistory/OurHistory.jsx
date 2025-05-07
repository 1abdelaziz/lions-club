import Timeline from "../Timeline/Timeline.jsx";
import { TimelineItem } from "../Timeline/Timeline.jsx";

export default function OurHistory() {
    const milestones = [
        {
          "date": {
            "datetime": "2018-01-01",
            "text": "2018"
          },
          "title": "Fondation de Lions FSBM",
          "paragraph": "Le club Lions FSBM a été fondé à la Faculté des Sciences Ben M’Sik, avec pour mission d'améliorer la communauté locale à travers des actions concrètes et solidaires."
        },
        {
          "date": {
            "datetime": "2022-03-01",
            "text": "Mars 2022"
          },
          "title": "Campagne de sensibilisation à la santé oculaire",
          "paragraph": "Organisation d’une campagne de dépistage gratuit de la vue et de sensibilisation à la santé oculaire au sein de la communauté universitaire."
        },
        {
          "date": {
            "datetime": "2022-12-01",
            "text": "Décembre 2022"
          },
          "title": "Collecte de sang",
          "paragraph": "Une opération de don du sang a été organisée pour soutenir les besoins de la communauté, avec des conditions sûres et encadrées."
        },
        {
          "date": {
            "datetime": "2022-11-01",
            "text": "Novembre 2022"
          },
          "title": "Distribution de fournitures scolaires",
          "paragraph": "Distribution de kits scolaires à l’école primaire Oqba Ibn Nafie pour encourager l’éducation et l’égalité des chances."
        },
        {
          "date": {
            "datetime": "2023-11-01",
            "text": "Novembre 2023"
          },
          "title": "Visite à un orphelinat à Mohammedia",
          "paragraph": "Visite d’un orphelinat avec distribution de vêtements et de denrées alimentaires pour améliorer le quotidien des enfants."
        },
        {
          "date": {
            "datetime": "2023-09-01",
            "text": "Septembre 2023"
          },
          "title": "Campagne de solidarité après le séisme d’Al-Haouz",
          "paragraph": "Lancement d’une campagne de collecte de fonds et de biens essentiels pour soutenir les familles touchées par le séisme."
        },
        {
          "date": {
            "datetime": "2023-10-01",
            "text": "Octobre 2023"
          },
          "title": "Caravane humanitaire vers Caronique-El Jadida",
          "paragraph": "Organisation d’une caravane humanitaire vers trois villages, avec distribution de vivres, vêtements et produits de première nécessité à 200 familles."
        },
        {
          "date": {
            "datetime": "2024-01-01",
            "text": "Janvier 2024"
          },
          "title": "Caravane humanitaire à Rhamna",
          "paragraph": "Poursuite des efforts humanitaires avec une mission de soutien et de dons pour les populations de la région de Rhamna."
        },
        {
          "date": {
            "datetime": "2024-04-01",
            "text": "Ramadan 2024"
          },
          "title": "Distribution de Ftours solidaires",
          "paragraph": "Distribution de paniers repas pour le Ftour à Casablanca durant le mois sacré du Ramadan."
        },
        {
          "date": {
            "datetime": "2025-03-08",
            "text": "8 Mars 2025"
          },
          "title": "Célébration de la Journée Internationale des Droits des Femmes",
          "paragraph": "Organisation d’activités autour du 8 mars, incluant des témoignages, conférences et ateliers de bien-être et d’autonomisation des femmes."
        }
    ]
      
    return (
        <section className="our-history">
            <Timeline title="OurHistory">
                {milestones.map((milestone, index) =>
                    <TimelineItem {...milestone} key={index} />
                )}
            </Timeline>
        </section>
    )
}