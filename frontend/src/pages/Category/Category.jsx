import './Category.css';
import MovieTable from '../../components/MovieTable/MovieTable';

function Category() {
  return (
    <div className="cat App">
      <div className="cat App-body">
        <MovieTable category="top_rated" category_title="Top Rated TV Shows" />
        <MovieTable category="popular" category_title="Popular" />
        <MovieTable category="upcoming" category_title="Upcoming" />
        <MovieTable category="now_playing" category_title="Now Playing" />
      </div>
    </div>
  );
}

export default Category;
