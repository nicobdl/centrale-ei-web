import './Home.css';
import MovieTable from '../../components/MovieTable/MovieTable';

function Home() {
  return (
    <div className="home App">
      <div className="home App-body">
        <MovieTable category="top_rated" category_title="Top Rated TV Shows" />
        <MovieTable category="popular" category_title="Popular" />
      </div>
    </div>
  );
}

export default Home;
