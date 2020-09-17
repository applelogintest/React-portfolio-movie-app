import React from 'react';
import '../css/MovieSlider.css';

function MovieSliderTitle({ type }) {
  let result = '';
  switch (type) {
    case 'rating':
      result = '현재 평점이 가장 좋은 영화!';
      break;
    case 'download':
      result = '가장 많이 다운로드수가 많은 영화!';
      break;
    case 'like':
      result = '사람들이 좋아하는 명작 영화!';
      break;
    default:
      return;
  }

  return <h1 className="Movie__recommend__title">{result}</h1>;
}

function MovieSliderItem({ movies }) {
  const title = movies
    .slice(0, 2)
    .map((movie) => {
      return movie.title;
    })
    .join(', ');

  return (
    <span className="Movie__titles">
      {title} 등
      <br /> 지금 가장 많이 보는 작품!
    </span>
  );
}

function getMovieSliderBg(urlStr) {
  const style = {
    background: `url('${urlStr}'),
    no-repeat linear-gradient(to bottom, white, rgb(20, 21, 23, 0.4))`,
    backgroundSize: '100% 100%',
  };

  return style;
}

function MovieSlider({ movies, bg }) {
  const result = [];
  for (let key in movies) {
    result.push(
      <section
        className="Movie__slider__container"
        style={getMovieSliderBg(bg[key])}
        key={key}
      >
        <article className="Movie__sliderItem" key={key}>
          <MovieSliderTitle type={key} />
          <MovieSliderItem movies={movies[key]} />
          <button className="Movie__list__btn">
            <i className="fas fa-list"></i>
            목록 보기
          </button>
        </article>
      </section>
    );
  }

  return (
    <div className="Movie__slider">
      <i className="fas fa-chevron-left fa-3x" />
      {result}
      <i className="fas fa-chevron-right fa-3x"></i>
    </div>
  );
}

export default MovieSlider;
