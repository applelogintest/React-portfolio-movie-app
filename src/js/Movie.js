import React, { Fragment } from 'react';
import '../css/Movie.css';

function Movie({ text }) {
  return (
    <Fragment>
      <header className="Movie__header">
        <nav className="Movie__nav">
          <ul className="nav__items">
            <li className="nav__item__home">홈</li>
            <li className="nav__detail__search">탐색하기</li>
          </ul>
          <ul className="nav__items">
            <li className="nav__movie__search">검색</li>
            <li className="nav__login">로그인</li>
          </ul>
        </nav>
      </header>
      <section className="Movie__slider">
        <article className="Movie__sliderItem">
          <h1 className="Movie__recommend__title">왓챠 최고 인기작</h1>
          <span className="Movie__titles">
            나쁜 녀석들: 더 무비, 엑시트 등
            <br /> 지금 가장 많이 보는 작품!
          </span>
          <button className="Movie__title__list">목록 보기</button>
        </article>
      </section>
      <section className="Movie__box">
        <article className="Movie__box__list">
          <span className="Movie__box__title">최고 인기 시리즈</span>
          <div className="Movie__box__items">
            <img
              className="Movie__box__poster"
              src="https://upload.wikimedia.org/wikipedia/ko/f/f0/%ED%95%B4%EC%9A%B4%EB%8C%80_%28%EC%98%81%ED%99%94%29.jpg"
              alt=""
            />
            <span className="Movie__box__movie">해운대</span>
          </div>
        </article>
      </section>
      <footer className="Movie__footer">Movie__footer</footer>
    </Fragment>
  );
}

export default Movie;
