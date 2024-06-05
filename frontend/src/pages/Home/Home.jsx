import logo from './logo.svg';
import './Home.css';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';

function Home() {
  const [movieName, setMovieName] = useState('');

  const handleInputChange = (event) => {
    setMovieName(event.target.value);

  const [movies,setMovies] = useState([])
  };

  useEffect(() => {
    console.log("Le composant Home a été mis à jour");
  }, []);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjlmNjAwMzY4MzMzODNkNGIwYjNhNzJiODA3MzdjNCIsInN1YiI6IjY0NzA5YmE4YzVhZGE1MDBkZWU2ZTMxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Em7Y9fSW94J91rbuKFjDWxmpWaQzTitxRKNdQ5Lh2Eo'
  }
  };

  axios
  .get(`https://developer.themoviedb.org/reference/movie-top-rated-list`, options)
  .then((response) => {
		movies=response
    console.log(response)
  })
  .catch((error) => {
		// Do something if call failed
		console.log(error)
  });

  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Top 100 best films
        </p>
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <input 
        type="text"
        value={movieName}
        placeholder="Film name"
        onChange={handleInputChange}
      />
      <p> Film : {movieName} </p>
    </div>
  );
}

export default Home;
