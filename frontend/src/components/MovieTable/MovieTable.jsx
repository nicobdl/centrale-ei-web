import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import './MovieTable.css';

function MovieTable({ category, category_title }) {
  const [movies_db, setMoviesDb] = useState([]);
  const [error, setError] = useState(null);
  const [currentTab, setCurrentTab] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${category}`, {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo',
        },
      })
      .then((response) => {
        const listMovies = response.data.results.map((movie) => ({
          //on map sur les chaque élément de results, qui ici sont des json contenant des infos sur les films
          name: movie.original_name,
          first_air_date: movie.first_air_date,
          poster_path: movie.poster_path,
          id: movie.id,
        }));
        setMoviesDb(listMovies);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des films:', error);
        setError('Erreur lors de la récupération des films.');
      });
  }, [category, category_title]); //liste des dépendances = liste des variables qui, si elles changent, déclenchent un nouveau rendu = liste des variables d'entrée ici

  //création des boutons pour matérialiser les 4 volets qu'on affichera
  const renderTabs = () => {
    const tabs = [];
    for (let i = 0; i < 4; i++) {
      tabs.push(
        //équivalent du .append() en python, ça ajoute un élément à la fin du tableau
        <button
          key={i}
          className={`tab-button ${i === currentTab ? 'active' : ''}`} //Si l'index du bouton courant (i) est égal à currentTab, alors la classe active est ajoutée. Ca permet de styliser le bouton actif différemment des autres boutons.
          onClick={() => setCurrentTab(i)} //on déclenche le changement de tab lorsque l'on clique sur le bouton
        />
      );
    }

    return tabs;
  };

  const renderMovieRow = () => {
    const startIndex = currentTab * 5;
    const movieRow = movies_db.slice(startIndex, startIndex + 5);

    return (
      <div
        className="movie-row"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        {/*affichage des flèches pour naviguer ssi on survole la ligne*/}
        {showArrows && currentTab > 0 && (
          <button
            className="arrow left-arrow"
            onClick={() => setCurrentTab(currentTab - 1)}
          >
            &lt;
          </button>
        )}
        {movieRow.map((movie) => (
          <MovieCard key={movie.name} movie={movie} />
        ))}
        {showArrows && currentTab < 3 && (
          <button
            className="arrow right-arrow"
            onClick={() => setCurrentTab(currentTab + 1)}
          >
            &gt;
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="movie-table">
      <h1 className="page-title">{category_title}</h1>
      {error ? <p>{error}</p> : renderMovieRow()}
      <div className="tab-navigation">{renderTabs()}</div>
    </div>
  );
}

export default MovieTable;
