import React from 'react';
import '../css/Header.css';

function Header({ handleInputSearchChange }) {
  return (
    <header className="Movie__header">
      <nav className="Movie__nav">
        <ul className="nav__items">
          <li className="nav__item__home">홈</li>
          <li className="nav__detail__search">탐색하기</li>
        </ul>
        <ul className="nav__items">
          <li className="nav__movie__search">
            <input
              className="nav__movie__input"
              type="text"
              placeholder="제목 검색"
              visibility="hidden"
              onChange={(e) => searchOnChage(e, handleInputSearchChange)}
            ></input>
            <i className="fas fa-search " onClick={clickSearch}>
              <span>검색</span>
            </i>
          </li>
          <li className="nav__login">로그인</li>
        </ul>
      </nav>
    </header>
  );
}

function searchOnChage(e, handleInputSearchChange) {
  const value = e.target.value;

  handleInputSearchChange(value);
}

function clickSearch() {
  const input = document.querySelector('.nav__movie__input');

  const inputVisible = input.style.visibility;

  if (inputVisible === 'visible') {
    input.style.width = '0px';
    input.style.visibility = 'hidden';
  } else {
    input.style.width = '180px';
    input.style.visibility = 'visible';
  }
}

export default Header;
