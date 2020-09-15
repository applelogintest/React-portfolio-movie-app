import React from 'react';

function Header() {
  return (
    <header className="Movie__header">
      <nav className="Movie__nav">
        <ul className="nav__items">
          <li className="nav__item__home">홈</li>
          <li className="nav__detail__search">탐색하기</li>
        </ul>
        <ul className="nav__items">
          <li className="nav__movie__search">
            <i className="fas fa-search "></i>
            검색
          </li>
          <li className="nav__login">로그인</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
