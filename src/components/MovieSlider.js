import React from 'react';
import '../css/MovieSlider.css';

function getMovieSliderTitle(type) {
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

  return result;
}

function getMovieSliderItem(movies) {
  const title = movies
    .slice(0, 2)
    .map((movie) => {
      return movie.title;
    })
    .join(', ');

  return title;
}

function MovieSlider({ movies, bg }) {
  return (
    <div
      className="Movie__slider__container"
      onClick={(event) => movieSliderClick(event, movies, bg)}
    >
      <section
        className="Movie__slider fade-in"
        style={getMovieSliderStyle(bg.rating)}
      >
        <article className="Movie__sliderItem">
          <h1 className="Movie__recommend__title">
            {getMovieSliderTitle('rating')}
          </h1>
          <span className="Movie__titles fade-in">
            {getMovieSliderItem(movies.rating)} 등 <br /> 지금 가장 많이 보는
            작품!
          </span>
          {/* <button className="Movie__list__btn">
            <i className="fas fa-list"></i>
            목록 보기
          </button> */}
        </article>
      </section>
      <i className="fas fa-chevron-left fa-3x" />
      <i className="fas fa-chevron-right fa-3x" />
    </div>
  );
}

function getMovieSliderStyle(urlStr, key) {
  const style = {
    background: `url('${urlStr}'),
    no-repeat linear-gradient(to bottom, white, rgb(20, 21, 23, 0.4))`,
    backgroundSize: '100% 100%',
    title: getMovieSliderTitle(`${key}`),
  };

  return style;
}

function movieSliderClick(event, movies, bg) {
  const target = event.target.className;

  switch (target) {
    case 'fas fa-chevron-left fa-3x':
    case 'fas fa-chevron-right fa-3x':
      arrow(target, movies, bg);
      break;
    default:
      break;
  }
}

function arrow(direction, movies, bg) {
  const regExp = /.fa-chevron-left/;
  const bgArr = Object.values(bg);

  if (regExp.test(direction)) {
    chageSlider(bgArr, movies, 'left');
  } else {
    chageSlider(bgArr, movies, 'right');
  }
}

function chageSlider(bgArr, movies, direction) {
  const movieSlider = document.querySelector('.Movie__slider');
  const sliderTitle = document.querySelector('.Movie__recommend__title');
  const sliderItem = document.querySelector('.Movie__titles');

  const movieKeys = Object.keys(movies);
  const movieObj = Object.values(movies);

  const bgStr = getBacgroundUrlStr(movieSlider.style.background);
  const currentIndex = bgArr.findIndex((value) => {
    return value === bgStr;
  });

  let index = 0;
  index = getIndex(currentIndex, bgArr.length, direction);

  const stlye = getMovieSliderStyle(bgArr[index]);

  movieSlider.classList.remove('fade-in');
  movieSlider.style.background = `${stlye.background}`;
  movieSlider.style.backgroundSize = `${stlye.backgroundSize}`;
  sliderTitle.textContent = getMovieSliderTitle(movieKeys[index]);
  sliderItem.innerHTML =
    //
    `${getMovieSliderItem(
      movieObj[index]
    )} 등 <br /> 지금 가장 많이 보는 작품! `;
  void movieSlider.offsetWidth;

  movieSlider.classList.add('fade-in');
}

function getIndex(index, length, direction) {
  let result = 0;
  if (direction === 'left') {
    result = index - 1;
    return result < 0 ? length - 1 : result;
  } else {
    result = index + 1;
    return result === length ? 0 : result;
  }
}

function getBacgroundUrlStr(bgStr) {
  const result = bgStr.substr(
    bgStr.indexOf('"') + 1,
    bgStr.lastIndexOf('"') - 5
  );
  return result;
}

export default MovieSlider;
