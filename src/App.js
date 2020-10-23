import React from 'react';
import Movie from './components/Movie';
import './App.css';

function App() {
	const movies = ['1', '2', '3'];

	return (
		<div className='App'>
			{movies.map((movie) => (
				<Movie></Movie>
			))}
		</div>
	);
}

export default App;

// https://developers.themoviedb.org/3/getting-started/introduction
// set up api
