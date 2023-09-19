/*
반복문
- 동일한 코드를 반복하여 실행시키는 명령문이다.
- for문, while문, do while문
*/

/*
for 문
- 정해진 숫자만큼 반복할 때 사용한다.
- for문의 괄호안은 초기화, 조건식, 표현식으로 구성되어있다.


실행순서
1. let i = 0으로 초기화
2. i < 5 조건식이 만족을 하면
3. for문 안에 명령문을 수행
4. i++ i값을 증가
5. 다시 조건식을 만족하는지 확인하고 만족하면 계속 수행
*/ 


for (let i = 0; i < 5; i++){
  console.log(i);
}

//for문 연습
//배열값 출력
let fruit = ['사과', '바나나' ,'딸기', '포도', '오렌지'];

for (let i = 0; i < fruit.length; i++){
  console.log(fruit[i]);
}

/*
while문
- 반복 횟수를 알 수 없을 때 사용한다.
- 조건문이 true 일 때 실행된다.
*/

let count = 0;
while (count < 0){
  console.log(count);
  count++;
}

/*
do while 문
- 반복 횟수를 알 수 없을 때 사용한다.
- 조건문이 true일 때 실행된다.
- false여도 최초 한번은 명령문을 수행한다.
*/ 

let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);

/*
continue, break

continue: continue 아래에 있는 문장들을 건너 뛰고 다음 반복 실행
break: 현재 진행하고 있는 명령문의 흐름을 종료.
*/ 
let text = '';
for (let i = 0; i < 10; i++){
  if (i == 3){
    // continue;
    break;
  }
  text = text + i;
}

console.log(text);

//for문 연습
//별찍기
for (let i = 0; i < 5; i++){
  for (let j = 0; j < i; j++){
    document.write("*")
  }
  document.write("<br>")
};
document.write("--------<br>")

//거꾸로 별찍기
for (let i = 0; i < 5; i++){
  for (let j = 0; j < 5; j--){
    document.write("*")
  }
  document.write("<br>")
}