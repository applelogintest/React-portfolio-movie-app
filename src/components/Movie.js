import React, { Fragment } from 'react';
import Header from './Header';
import SearchMovie from './SearchMovie';
import MovieSlider from './MovieSlider';
import MovieList from './MovieList';
import Footer from './Footer';

function Movie({
  movies,
  bg,
  handleInputSearchChange,
  searchMovies,
  movieCount,
  keyword,
}) {
  return (
    <Fragment>
      <Header handleInputSearchChange={handleInputSearchChange}></Header>
      {movieCount !== undefined ? (
        <SearchMovie
          searchMovies={searchMovies}
          keyword={keyword}
        ></SearchMovie>
      ) : (
        <Fragment>
          <MovieSlider movies={movies} bg={bg}></MovieSlider>
          <MovieList movies={movies}></MovieList>
        </Fragment>
      )}
      <Footer></Footer>
    </Fragment>
  );
}

export default Movie;
