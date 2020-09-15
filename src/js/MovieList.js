import React from 'react';

function MovieList() {
  return (
    <section className="Movie__box">
      <div className="Movie__box__arrow left">
        <i className="fas fa-chevron-left fa-3x"></i>
      </div>
      <article className="Movie__box__list">
        <span className="Movie__box__title">최고 인기 시리즈</span>
        <div className="Movie__box__items">
          <div className="Movie__box__item">
            <img
              className="Movie__box__poster"
              src="https://upload.wikimedia.org/wikipedia/ko/f/f0/%ED%95%B4%EC%9A%B4%EB%8C%80_%28%EC%98%81%ED%99%94%29.jpg"
              alt=""
            />
            <span className="Movie__box__movie">해운대</span>
          </div>
        </div>
      </article>
      <div className="Movie__box__arrow right">
        <i className="fas fa-chevron-right fa-3x"></i>
      </div>
    </section>
  );
}

export default MovieList;
