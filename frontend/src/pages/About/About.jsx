import React from 'react';
import './About.css';
import logo from './logo_cinescope.png';

function About() {
  return (
    <div className="ab about-container">
      <img src={logo} alt="CinéScope Logo" className="ab logo" />
      <div className="ab about-content">
        <h1>À propos de CinéScope</h1>
        <p>
          CinéScope est une initiative innovante lancée par un groupe passionné
          d'Electro-Centraliens, déterminés à révolutionner la manière dont les
          cinéphiles découvrent et explorent le monde du cinéma. Ce site web a
          été conçu pour rendre la recherche de films accessible à tous, en
          offrant une plateforme conviviale et riche en fonctionnalités.
          Conscient des défis rencontrés par les amateurs de films pour trouver
          des informations fiables et complètes, CinéScope se positionne comme
          un outil incontournable pour les passionnés de cinéma.
        </p>
        <p>
          Les développeurs de CinéScope ont mis à profit leur expertise en
          ingénierie et en technologie pour créer une interface utilisateur
          intuitive et élégante. Chaque aspect du site a été pensé pour offrir
          une expérience utilisateur fluide et agréable, que vous soyez à la
          recherche des derniers blockbusters ou de films d'auteur moins connus.
          CinéScope propose une base de données exhaustive, comprenant des
          informations détaillées sur les films, les réalisateurs, les acteurs,
          ainsi que des critiques et des avis de la communauté.
        </p>
        <p>
          L'un des points forts de CinéScope est son moteur de recherche
          puissant et optimisé, permettant de filtrer les résultats selon divers
          critères tels que le genre, l'année de sortie, la note des spectateurs
          et bien plus encore. Grâce à cette fonctionnalité, trouver le film
          parfait pour une soirée cinéma devient un jeu d'enfant. De plus,
          CinéScope offre des recommandations personnalisées basées sur vos
          préférences et votre historique de visionnage, vous aidant ainsi à
          découvrir de nouveaux films qui correspondent à vos goûts.
        </p>
        <p>
          En somme, CinéScope se distingue par sa mission de rendre la recherche
          de films accessible à tous, en combinant technologie de pointe et
          amour du cinéma. Que vous soyez un cinéphile aguerri ou un spectateur
          occasionnel, CinéScope a été conçu pour répondre à vos besoins et vous
          offrir une expérience de découverte cinématographique sans égale.
          Rejoignez la communauté CinéScope et plongez dans un univers où chaque
          film est à portée de clic.
        </p>
      </div>
    </div>
  );
}

export default About;
