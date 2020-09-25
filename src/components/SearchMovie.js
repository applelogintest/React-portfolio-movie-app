import React from 'react';
import '../css/SearchMovie.css';

function SearchMovieItem({ movies }) {
  const result = movies.map((movie) => {
    return (
      <article
        className="Search__movie__item"
        key={movie.id}
        onMouseEnter={(e) => zoomIn(e)}
        onMouseLeave={(e) => zoomOut(e)}
      >
        <img
          className="Search__movie__poster"
          src={movie.medium_cover_image}
          alt={movie.title}
        ></img>
        <div className="Search__movie__detail">
          <span>출시년도 : {movie.year} 년</span>
          <span>평점 : {movie.rating}</span>
          <span>런타임 : {movie.runtime} 분</span>
          <a
            href={`https://www.youtube.com/watch?v=` + movie.yt_trailer_code}
            target="_blink"
          >
            <i className="fas fa-video fa-2x"></i>
          </a>
        </div>
        <span className="Search__movie__title">{movie.title}</span>
      </article>
    );
  });

  return result;
}
function SearchMovieHtml({ movies, keyword }) {
  return (
    <section className="Search__movie__container">
      <h2>"{keyword}"의 검색 결과</h2>
      <SearchMovieItem movies={movies}></SearchMovieItem>
    </section>
  );
}

function NotFoundMovieHtml({ keyword }) {
  return (
    <section className="Search__movie__notFond">
      <h2>"{keyword}"의 검색 결과</h2>
      <div>찾는 영화가 없어요</div>
    </section>
  );
}

function SearchMovie({ searchMovies, keyword }) {
  return searchMovies ? (
    <SearchMovieHtml movies={searchMovies} keyword={keyword}></SearchMovieHtml>
  ) : (
    <NotFoundMovieHtml keyword={keyword}></NotFoundMovieHtml>
  );
}

function zoomIn(e) {
  const target = e.currentTarget;

  const moviePoster = target.querySelector('.Search__movie__poster');
  const movieDetail = target.querySelector('.Search__movie__detail');

  moviePoster.style.transform = 'scale(1.05)';
  moviePoster.style.opacity = '0.5';

  movieDetail.style.visibility = 'visible';
}

function zoomOut(e) {
  const target = e.currentTarget;

  const moviePoster = target.querySelector('.Search__movie__poster');
  const movieDetail = target.querySelector('.Search__movie__detail');

  moviePoster.style.transform = 'scale(1)';
  moviePoster.style.opacity = '1';

  movieDetail.style.visibility = 'hidden';
}

export default SearchMovie;
