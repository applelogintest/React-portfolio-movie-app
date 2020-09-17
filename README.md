# React-portfolio-movie-app

# 9/14

### Watcha 영화 사이트를 참고하여 정적인 웹페이지 설계 및 구현

![html설계](https://user-images.githubusercontent.com/54167419/93066221-b20d8c80-f6b4-11ea-99b1-8d92c2a31c1e.png)





# 9/15

### component 별로 구별하여 파일 작성 

### 전체적인 CSS 구현 (아직 미완성)

### open API를 통하여 영화 리스트 가져오기 구현중  
#


# 9/16

### js폴더 이름 componets로 변경

### css 파일 분리

### state의 값 안 받아지는것 해결
       const { movies } = this.state; 에서  { movise }는 state에 접근하여 movies가 존재 해야 값이 받아짐
  
### 최상위 컴포넌트에서 배열로 state 전달시 key값도 같이 전달해야 되는데 해결방안 생각중  
#





# 9/17
## JavaScript
 ###  key값 전달 해결 
 #### - 여러개의 컴포트를 만드는 작업을 할때는 고유한 key값을 전하여 수정,삭제,추가에 용이성을 증가시키 위해 사용

 
 
### 최상위 컴포넌트에서 데이터를 state에 담을때 배열 => 객체로 변경
 #### - 하위 컴포넌트에서 데이터를 배열로 받아 다시 뽑아내는데 복잡하고 어려움이 있었음 
   ####   그래서 최상위에서 객체로 담아 객체의 key값으로 데이터를 추출하여 영화 리스트를 추출하기 수월해짐
 
 
## HTML 

### 슬라이더 html 구조 변경


## CSS 

### 영화 리스트의 포스터 크기 변경 


### 슬라이더 html 구조 변경에 따른 CSS 변경  
#


