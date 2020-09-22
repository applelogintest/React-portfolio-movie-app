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

function clickListArrow(direction) {
  const moveListPX = 1000;

  const items = document.querySelector('.Movie__box__items');
  const boxArrowLeft = document.querySelector('.Movie__box__arrow.left');
  const boxArrowRight = document.querySelector('.Movie__box__arrow.right');
  const listWidth = items.clientWidth;

  let translateX = items.style.transform;

  translateX = parseInt(translateX.replace(/[^0-9]/g, ''));
  boxArrowLeft.style.visibility = 'visible';

  if (direction === 'right') {
    const translateXRight = translateX + moveListPX;
    items.style.transform =
      translateX > 0
        ? `translateX(-${translateXRight}px)`
        : 'translateX(-1000px)';

    if (translateXRight >= listWidth - moveListPX) {
      boxArrowRight.style.visibility = 'hidden';
    } else {
      boxArrowLeft.style.visibility = 'visible';
    }
  } else {
    const translateXLeft = translateX - moveListPX;
    items.style.transform = `translateX(-${translateXLeft}px)`;

    if (translateXLeft === 0) {
      boxArrowLeft.style.visibility = 'hidden';
    } else {
      boxArrowRight.style.visibility = 'visible';
    }
  }
}

function MovieBoxhtml({ movies }) {
  const result = [];
  let movieListWidth = 0;
  for (let key in movies) {
    movieListWidth = 250 * movies[key].length;
    result.push(
      <section className="Movie__box" key={key}>
        <article className="Movie__box__list">
          <MovieBoxTitle title={key}></MovieBoxTitle>
          <div className="Movie__box__slide">
            <div
              className="Movie__box__items"
              style={{ width: `${movieListWidth}px` }}
            >
              <MovieListHtml movieList={movies[key]}></MovieListHtml>
            </div>
          </div>
        </article>
        <div
          className="Movie__box__arrow left"
          onClick={() => clickListArrow('left')}
        >
          <i className="fas fa-chevron-left fa-3x"></i>
        </div>
        <div
          className="Movie__box__arrow right"
          onClick={() => clickListArrow('right')}
        >
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
