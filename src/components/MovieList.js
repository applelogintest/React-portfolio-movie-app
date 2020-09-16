import React from 'react';
import '../css/MovieList.css';

function MovieBoxTitle({ movies }) {
  let title = '';
  switch (movies) {
    case 'ratingMovies':
      title = '평점순 인기 영화 리스트';
      break;
    case 'downloadCountMovies':
      title = '다운로드 회수 높은 영화 리스트';
      break;
    case 'likeCountMovies':
      title = '관객이 좋은 평가를 준 영화 리스트';
      break;
    default:
      return;
  }

  return `<span className="Movie__box__title">${title}</span>`;
}

function MovieBoxhtml({ movies, key }) {
  const result = movies.map((movieList) => {
    return (
      <section className="Movie__box">
        <div className="Movie__box__arrow left">
          <i className="fas fa-chevron-left fa-3x"></i>
        </div>
        <MovieListHtml movieList={movieList} key={movieList.id}></MovieListHtml>
        <div className="Movie__box__arrow right">
          <i className="fas fa-chevron-right fa-3x"></i>
        </div>
      </section>
    );
  });

  return result;
}

function MovieListHtml({ movieList, key }) {
  const result = movieList.map((movie) => {
    return (
      <article className="Movie__box__list">
        <div className="Movie__box__items">
          <div className="Movie__box__item">
            <img
              className="Movie__box__poster"
              src={movie.medium_cover_image}
              alt={movie.title}
            />
            <span className="Movie__box__movie">{movie.title}</span>
          </div>
        </div>
      </article>
    );
  });

  return result;
}

function MovieList({ movies, key }) {
  return <MovieBoxhtml movies={movies} key={key}></MovieBoxhtml>;
}

export default MovieList;
