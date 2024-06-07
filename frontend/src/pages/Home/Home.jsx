import './Home.css';
import MovieTable from '../../components/MovieTable/MovieTable';

function Home() {
  return (
    <div className="home App">
      <div class="welcome-text">
        <h1>
          <span class="cinescope-text">Welcome to CinéScope</span>
        </h1>
      </div>
      <div className="home App-body">
        <MovieTable category="top_rated" category_title="Top Rated TV Shows" />
        <MovieTable category="popular" category_title="Popular" />
      </div>
    </div>

    // <div className="search-results-container">
    //   {movieDetails.map((movie) => (
    //     <div key={movie.id} className="search-results movie-card">
    //       <img
    //         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    //         alt={movie.name}
    //         className="search-results movie-poster"
    //       />
    //       <div className="search-results movie-info">
    //         <h3>{movie.name}</h3>
    //         <p>{movie.first_air_date}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
}

export default Home;
