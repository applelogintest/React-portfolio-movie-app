import React, { Fragment } from 'react';
import Header from './Header';
import MovieSlider from './MovieSlider';
import MovieList from './MovieList';
import Footer from './Footer';

import '../css/Movie.css';

function Movie({ ratingMovies, downloadCountMovies, likeCountMovies }) {
  console.log(ratingMovies);
  return (
    <Fragment>
      <Header></Header>
      <MovieSlider></MovieSlider>
      <MovieList></MovieList>
      <Footer></Footer>
    </Fragment>
  );
}

export default Movie;
