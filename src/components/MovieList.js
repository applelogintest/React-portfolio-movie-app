import React from 'react';
import '../css/MovieList.css';

function MovieBoxTitle({ title }) {
  let result = '';
  switch (title) {
    case 'rating':
      result = '평점순 인기 영화 리스트';
      break;
    case 'download':
      result = '다운로드 회수 높은 영화 리스트';
      break;
    case 'like':
      result = '관객이 좋은 평가를 준 영화 리스트';
      break;
    default:
      return;
  }

  return <span className="Movie__box__title">{result}</span>;
}

function MovieBoxhtml({ movies }) {
  const result = [];
  for (let key in movies) {
    result.push(
      <section className="Movie__box" key={key}>
        <div className="Movie__box__arrow left">
          <i className="fas fa-chevron-left fa-3x"></i>
        </div>
        <article className="Movie__box__list">
          <MovieBoxTitle title={key}></MovieBoxTitle>
          <div className="Movie__box__items">
            <MovieListHtml movieList={movies[key]}></MovieListHtml>
          </div>
        </article>
        <div className="Movie__box__arrow right">
          <i className="fas fa-chevron-right fa-3x"></i>
        </div>
      </section>
    );
  }

  return result;
}

function MovieListHtml({ movieList }) {
  const result = movieList.map((movie) => {
    return (
      <div className="Movie__box__item" key={movie.id}>
        <img
          className="Movie__box__poster"
          src={movie.medium_cover_image}
          alt={movie.title}
        />
        <span className="Movie__box__movie">{movie.title}</span>
      </div>
    );
  });

  return result;
}

function MovieList({ movies }) {
  return <MovieBoxhtml movies={movies}></MovieBoxhtml>;
}

export default MovieList;
