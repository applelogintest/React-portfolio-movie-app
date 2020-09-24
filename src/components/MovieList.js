import React from 'react';
import '../css/MovieList.css';

function MovieBoxTitle({ title }) {
  let result = '';
  switch (title) {
    case 'rating':
      result = '평점순 인기 영화 리스트';
      break;
    case 'download':
      result = '다운로드 횟수 높은 영화 리스트';
      break;
    case 'like':
      result = '좋아요가 많은 영화 리스트';
      break;
    default:
      return;
  }

  return <span className="Movie__box__title">{result}</span>;
}

function MovieBoxhtml({ movies }) {
  const result = [];
  let movieListWidth = 0;
  for (let key in movies) {
    movieListWidth = 253 * movies[key].length;
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
          onClick={(e) => clickListArrow(e, 'left')}
        >
          <i className="fas fa-chevron-left fa-3x"></i>
        </div>
        <div
          className="Movie__box__arrow right"
          onClick={(e) => clickListArrow(e, 'right')}
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
      <div
        className="Movie__box__item"
        key={movie.id}
        onMouseEnter={(e) => zoomIn(e)}
        onMouseLeave={(e) => zoomOut(e)}
      >
        <img
          className="Movie__box__poster"
          src={movie.medium_cover_image}
          alt={movie.title}
        />
        <div className="Movie__box__detail">
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
        <span className="Movie__box__movie">{movie.title}</span>
      </div>
    );
  });

  return result;
}

function MovieList({ movies }) {
  return <MovieBoxhtml movies={movies}></MovieBoxhtml>;
}

function clickListArrow(e, direction) {
  const moveListPX = 1020;
  const targetList = e.currentTarget.parentNode.firstChild;
  const targetArrow = e.currentTarget.parentNode;

  const items = targetList.querySelector('.Movie__box__items');
  const boxArrowLeft = targetArrow.querySelector('.Movie__box__arrow.left');
  const boxArrowRight = targetArrow.querySelector('.Movie__box__arrow.right');
  const listWidth = targetList.querySelector('.Movie__box__items').clientWidth;

  let translateX = items.style.transform;

  translateX = parseInt(translateX.replace(/[^0-9]/g, ''));
  boxArrowLeft.style.visibility = 'visible';

  if (direction === 'right') {
    const translateXRight = translateX + moveListPX;
    items.style.transform =
      translateX > 0
        ? `translateX(-${translateXRight}px)`
        : 'translateX(-1020px)';

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

function zoomIn(e) {
  const target = e.currentTarget;

  const moviePoster = target.querySelector('.Movie__box__poster');
  const movieDetail = target.querySelector('.Movie__box__detail');

  moviePoster.style.transform = 'scale(1.05)';
  moviePoster.style.opacity = '0.7';

  movieDetail.style.visibility = 'visible';
}

function zoomOut(e) {
  const target = e.currentTarget;

  const moviePoster = target.querySelector('.Movie__box__poster');
  const movieDetail = target.querySelector('.Movie__box__detail');

  moviePoster.style.transform = 'scale(1)';
  moviePoster.style.opacity = '1';

  movieDetail.style.visibility = 'hidden';
}

export default MovieList;
