// import { Link } from 'react-router-dom';
// import './Header.css';
// import { useState } from 'react';
// import logo from './logo_cinescope.png'; // Assure-toi d'importer le logo ici

// const Header = () => {
//   const [movieName, setMovieName] = useState('');
//   const [searchResult, setSearchResult] = useState('');

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       handleSubmit();
//     }
//   };

//   const handleChange = (event) => {
//     setMovieName(event.target.value);
//   };

//   const handleSubmit = () => {
//     setSearchResult(movieName);
//   };

//   return (
//     <div className="Header-container">
//       <div className="tab-list">
//         <Link className="Link" to="/">
//           Home
//         </Link>
//         <div>|</div>
//         <Link className="Link" to="/counter">
//           Counter
//         </Link>
//         <div>|</div>
//         <Link className="Link" to="/users">
//           Users
//         </Link>
//         <div>|</div>
//         <Link className="Link" to="/about">
//           About
//         </Link>
//       </div>
//       <img src={logo} className="App-logo" alt="logo" />
//       <div className="search-box">
//         <input
//           type="text"
//           name="movie-search-engine"
//           placeholder="Rechercher un film"
//           value={movieName}
//           onChange={handleChange}
//           onKeyDown={handleKeyDown}
//         />
//         <button type="button" onClick={handleSubmit}>
//           Rechercher
//         </button>
//       </div>
//       {searchResult && <p>Votre recherche : {searchResult}</p>}
//     </div>
//   );
// };

// export default Header;

// --------------------------------------------------------

// Barre de nav fonctionnelle ::
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <nav className="nav">
//         <ul className="nav-list">
//           <li className="nav-item">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/user">User</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//         <div className="search-bar">
//           <input type="text" placeholder="Search..." />
//           <button type="submit">Search</button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

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
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/user">User</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="search-bar">
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
