import React from 'react';

function MovieSlider() {
  return (
    <section className="Movie__slider">
      <i className="fas fa-chevron-left fa-3x" />
      <article className="Movie__sliderItem">
        <h1 className="Movie__recommend__title">왓챠 최고 인기작</h1>
        <span className="Movie__titles">
          나쁜 녀석들: 더 무비, 엑시트 등
          <br /> 지금 가장 많이 보는 작품!
        </span>
        <button className="Movie__list__btn">
          <i className="fas fa-list"></i>
          목록 보기
        </button>
      </article>
      <i className="fas fa-chevron-right fa-3x"></i>
    </section>
  );
}

export default MovieSlider;
