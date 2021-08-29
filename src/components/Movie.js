import React from 'react';
//import Imgix from 'react-imgix';

// const IMG_API =
// 	'https://jamie-dawson.imgix.net/https://image.tmdb.org/t/p/w1280';

// const IMGIX_PARAMS = '?w=300&h=450';

const setVoteClass = (vote) => {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 6) {
		return 'orange';
	} else {
		return 'red';
	}
};

const Movie = ({title, poster_path, overview, vote_average}) => (
	<div className='movie'>
		<img
			srcset={
				'https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280' +
				poster_path +
				'?w=300&h=450&dpr=1&txt=dpr1&q=75&auto=format 1x,' +
				'https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280' +
				poster_path +
				'?w=300&h=450&dpr=2&txt=dpr2&q=75&auto=format 2x,' +
				'https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280' +
				poster_path +
				'?w=300&h=450&dpr=3&txt=dpr3&q=75&auto=format 3x,' +
				'https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280' +
				poster_path +
				'?w=300&h=450&dpr=4&txt=dpr4&q=75&auto=format 4x,' +
				'https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280' +
				poster_path +
				'?w=300&h=450&dpr=5&txt=dpr5&q=75&auto=format 5x'
			}
			src={
				'https://jamie-dawson.imgix.net/image.tmdb.org/t/p/w1280' + poster_path
			}
			alt={title}
		/>
		<div className='movie-info'>
			<h3>{title}</h3>
			<span className={`tag ${setVoteClass(vote_average)}`}>
				{vote_average}
			</span>
		</div>
		<div className='movie-over'>
			<h2>Overview:</h2>
			<p>{overview}</p>
		</div>
	</div>
);

export default Movie;
