import React, { Fragment } from 'react';
import Header from './Header';
import MovieSlider from './MovieSlider';
import MovieList from './MovieList';
import Footer from './Footer';

function Movie({ movies, key }) {
  return (
    <Fragment>
      <Header></Header>
      <MovieSlider></MovieSlider>
      <MovieList movies={movies} key={key}></MovieList>
      <Footer></Footer>
    </Fragment>
  );
}

export default Movie;
