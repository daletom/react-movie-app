import React from 'react';
import Imgix from 'react-imgix';

const setVoteClass = (vote) => {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 6) {
		return 'orange';
	} else {
		return 'red';
	}
};

const Movie = ({title, poster_path, overview, vote_average, mono}) => (
	<div className='movie'>
		<Imgix
			src={
				'https://jamie-dawson.imgix.net/t/p/w1280' + poster_path
			}
			width={300}
			height={450}
			imgixParams={{ fit: "crop", auto: "format,compress"}}
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
