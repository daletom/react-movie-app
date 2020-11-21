import React, {useEffect, useState} from 'react';
import Movie from './components/Movie';
import './App.css';
require('dotenv').config();

const FEATURED = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_SECRET}`;

function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(FEATURED)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setMovies(data.results);
			});
	}, []);

	return (
		<>
			<header>
				<input className='search' type='search' placeholder='serach...' />
			</header>
			<div className='movie-container'>
				{movies.length > 0 &&
					movies.map((movie) => <Movie key={movie.id} {...movie} />)}
			</div>
		</>
	);
}

export default App;

// https://developers.themoviedb.org/3/getting-started/introduction
// set up api
