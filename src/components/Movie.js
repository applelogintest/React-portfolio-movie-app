import React, { Fragment } from 'react';
import Header from './Header';
import MovieSlider from './MovieSlider';
import MovieList from './MovieList';
import Footer from './Footer';

function Movie({ movies, bg }) {
  return (
    <Fragment>
      <Header></Header>
      <MovieSlider movies={movies} bg={bg}></MovieSlider>
      <MovieList movies={movies}></MovieList>
      <Footer></Footer>
    </Fragment>
  );
}

export default Movie;
