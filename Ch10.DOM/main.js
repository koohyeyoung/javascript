/*
DOM (document object model)
- 웹 문서 (HTML)를 객체화 함으로써 제어할 수 있다.
*/ 

/*
HTML요소 선택하기
  get 메서드, 쿼리 메서드

get 메서드
- document.getElementById : 
  HTML에서 고유한 id를 이용하여 요소를 찾는다.
- document.getElementsByCLassName :
  HTML에서 크래스 명으로 요소를 찾는다.
- document.getElementsByTagName :
  HTML에서 태그명으로 요소를 찾는다.

query 메서드
- document.querySelector:
  css 선택자를 사용하여 HTML 내 첫 번째 요소를 찾는다.
- document.querySelectorAll:
  CSS 선택자를 사용하여 HTMl 내 일치하는 모든 요소를 찾는다.
*/ 


//get 메서드

document.getElementById('title'); //객체생성
document.getElementsByClassName('item'); //객체생성
document.getElementsByTagName('li'); //객체생성
console.log(document.getElementById('title'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

//get 메서드
document.querySelector('#title');
console.log(document.querySelector('#title'));

//query 메서드
document.querySelectorAll('.item');
console.log(document.querySelectorAll('.item'));