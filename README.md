# React-portfolio-movie-app

# 9/14

- Watcha 영화 사이트를 참고하여 정적인 웹페이지 설계 및 구현

![html설계](https://user-images.githubusercontent.com/54167419/93066221-b20d8c80-f6b4-11ea-99b1-8d92c2a31c1e.png)

---

# 9/15

- component 별로 구별하여 파일 작성

- 전체적인 CSS 구현 (아직 미완성)

- open API를 통하여 영화 리스트 가져오기 구현중

---

# 9/16

- js폴더 이름 componets로 변경

- css 파일 분리

- state의 값 안 받아지는것 해결
  const { movies } = this.state; 에서 { movise }는 state에 접근하여 movies가 존재 해야 값이 받아짐

---

# 9/17

## JavaScript

- key값 전달 해결

* 여러개의 컴포트를 만드는 작업을 할때는 고유한 key값을 전하여 수정,삭제,추가에 용이성을 증가시키 위해 사용

- 최상위 컴포넌트에서 데이터를 state에 담을때 배열 => 객체로 변경

* 하위 컴포넌트에서 데이터를 배열로 받아 다시 뽑아내는데 복잡하고 어려움이 있었음  
   그래서 최상위에서 객체로 담아 객체의 key값으로 데이터를 추출하여 영화 리스트를 추출하기 수월해짐

## HTML

- 슬라이더 html 구조 변경

## CSS

- 영화 리스트의 포스터 크기 변경

- 슬라이더 html 구조 변경에 따른 CSS 변경

---

# 9/18

## JavaScript

- 슬라이더 최상위 태그에 이벤트를 위임하여 이벤트처리 구현중

## HTML

- 슬라이더 html 구조 변경 (슬라이더 구현의 문제 발견)

## CSS

- html 구조 변경에 따른 css 변경
- 슬라이더 css 애니메이션 추가중

---

# 9/21

## JavaScript

- 슬라이더 부분 전체적인 변경

  - 슬라이더 이미지들이 %되어 있어서 옆 화면이 보이는 경우가 생김 (고정값을 가져와 해결)  
    하지만 브라우저를 줄였다 다시키우게 되면 슬라이더 이미지들이 작아져 다시 위와 같은 경우 발생

  - watcha의 형식으로 변경 ( 화살표 클릭시 슬라이더의 내부 값들을 변경)
  - animation 적용중
    처음 클릭시 animation이 작동하지만 그 다음 부터 작동이 안됨

## HTML

- watch의 형식으로 바꾸면서 html 구조 변경
  - Movie\_\_slider\_\_slides, Movie\_\_slider\_\_slide 삭제

## CSS

- html 구조 변경으로 인하여 해당 클래스의 CSS 삭제
- animation 추가

---

# 9/22

## JavaScript

- 슬라이더 animation 해결
  animation을 CSS에서 등록후 슬라이더에게 클래스를 부여
  하지만 클래스를 부여하는 순간 animation이 한번동작하고 다시 반복이 안됨
  그래서 해당 클래스를 삭제후 void movieSlider.offsetWidth; 실행시켜
  브라우저에게 re-flow를 하게 만든뒤 다시 animation 클래스를 추가시켜 동작시켰다.

  re-flow는 모든 엘리먼트의 위치 길이 등을 계산하여 다시 렌더링 시키는것이기 때문에
  비효율적이다.

- 리스트 슬라이더 구현 (구현중)
  3개의 리스트를 각각 따로 움직여야 하는데 모든 리스트가 하나의 리스트를 작동시키는 문제가 있음

## HTML

- MovieList에서 슬라이더의 구조 변경

## CSS

- MovieSlider animation 추가
- MovieList 슬라이더의 html 구조 변경에 따른 CSS 변경

---

# 9/23

## JavaScript

- 리스트 슬라이더 구현 완료

## HTML

- 변경사항 없음

## CSS

- 영화 리스트 hover시 스케일 크기 증가 추가

## TODO

- 영화 리스트의 포스터 hover시 상세내용 추가 해야됨

---

# 9/24

## JavaScript

- 영화 리스트 mouse 이벤트를 이용하여 평점,런타임,제작년도,트레일러 표시하기 추가
- 영화 검색아이콘 및 검색 텍스트 누를시 나타내기 추가
- 영화 검색 기능 구현중

## HTML

- 영화 리스트안의 내용 추가
- 검색창 input 태그 추가
- SearchMovie 구조 작성중

## CSS

- 영화 리스트안의 내용에 대한 추가
- 검색 input 태그 추가
- SearchMovie CSS 파일 추가

## TODO

- 영화 검색 기능 데이터를 받고 이미지 출력하기 까지 성공 HTML CSS 구현해야됨

---

# 9/25

## JavaScript

- 영화 검색 기능 개선
  1. 사용자가 입력을 다 하고나서 데이터를 받아오도록 함
  2. 빈공백 정규식으로 처리
- 영화 검색 마우스 이벤트 추가
- main loading page 구현

## HTML

- SearchMovie detail 추가

## CSS

- app--loading animation 추가
- SearchMovie detail 관련 css 추가
- SearchMovie grid layout css 추가

## TODO

- 영화 검색시 데이터 없는 layout 만들어야됨
- 영화 검색 데이터를 부르는 중에 loading 페이지 구현 해야됨

---
