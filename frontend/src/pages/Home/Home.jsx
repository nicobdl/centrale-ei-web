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
  );
}

export default Home;
