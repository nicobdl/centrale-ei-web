import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Layout from './components/Layout/Layout';
import Users from './pages/Users/Users';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import SearchResults from './pages/SearchResults/SearchResults';
import Category from './pages/Category/Category';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/" element={<Category />} />
        <Route path="users" element={<Users />} />
        <Route path="about" element={<About />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="search/:query_name" element={<SearchResults />} />
      </Routes>
    </Layout>
  );
}

export default App;
