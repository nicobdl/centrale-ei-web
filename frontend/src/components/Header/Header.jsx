import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [movieName, setMovieName] = useState('');
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setMovieName(event.target.value);
      navigate(`/search/${movieName}`);
    }
  };

  const handleChange = (event) => {
    setMovieName(event.target.value);
  };

  const handleSubmit = () => {
    setMovieName(movieName);
    navigate(`/search/${movieName}`);
  };

  return (
    <header className="header">
      <nav className="nav">
        {/*barre de navigation avec les différents onglets*/}
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/category">Category</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="search-bar">
          {/*barre de recherche*/}
          <input
            type="text"
            placeholder="Search..."
            value={movieName}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
