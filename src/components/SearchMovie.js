import React from 'react';
import '../css/SearchMovie.css';

function SearchMovieItem({ movies }) {
  const result = movies.map((movie) => {
    return (
      <article className="Search__movie__item">
        <img
          className="Search__movie__poster"
          src={movie.medium_cover_image}
          alt={movie.title}
        ></img>
      </article>
    );
  });

  return result;
}
function SearchMovieHtml({ movies }) {
  console.log(movies);
  return (
    <section className="Search__movie__container">
      <SearchMovieItem movies={movies}></SearchMovieItem>
    </section>
  );
}

function NotFoundMovieHtml() {
  return <div className="Search__movie__notFond"> 찾는 영화가 없어요 </div>;
}

function SearchMovie({ searchMovies }) {
  console.log(searchMovies);
  return searchMovies ? (
    <SearchMovieHtml movies={searchMovies}></SearchMovieHtml>
  ) : (
    <NotFoundMovieHtml></NotFoundMovieHtml>
  );
}

export default SearchMovie;
