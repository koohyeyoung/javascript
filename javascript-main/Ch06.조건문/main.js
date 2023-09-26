/*
조건문
- 조건에 따라 다른 문장을 실행하는 명령문
- if, switch
*/ 

/*
if문
- if : 조건이 true 일 경우 명령문을 실행한다.
- else : false일 경우 명령문을 실행한다.
*/ 
// let condition =  false;
// if (condition){
//     console.log("참 입니다.");
// }else {
//     console.log("거짓 입니다.")
// }

// let number = 10;
// if(number == 10){
//     console.log("첫 번째 블롥");
// }else if(number == 20){
//     console.log("두 번째 블록")
// }else if(number == 30){
//     console.log("세 번째 블록")
// }else {
//     console.log("네 번째 블록")
// }

// //if문 연습
// //논리 연산자 사용
// let score = prompt("점수를 입력해주세요");
// let isPass = score >= 60;
// if (isPass && score >= 90){
//     console.log("A학점, 합격입니다.")
// }else if(isPass && score >= 80){
//     console.log("B학점, 합격입니다.")
// }else if(isPass && score >= 70){
//     console.log("C학점, 합격입니다.")
// }else {
//     console.log("F학점, 불합격입니다.")
// }

//다중 조건문
let passwordCheck = false ;
let userRole = "admin";
if (passwordCheck){
    if(userRole === "admin" ){
        console.log("관리자로 로그인 합니다.")
    }else if(userRole ==="user"){
        console.log("사용자로 로그인 합니다.")
    }else {
        console.log("페이지 접근이 제한되었습니다.")
    }
} else{
    console.log("비밀번호를 잘못 입력했거나 없는 아이디 입니다.")
}

/*
switch문
- switch문의 값이 case 조건과 일치할 경우 해당 case 절의 명령문 수행
- case 절의 명령문을 수행한 후 break 를 만나면 swich 문을 종료
- 일치하는 case절이 없으면 default 절의 명령문을 수행
*/ 
let subject = "javascript";
switch (subject){
    case "javascript":
        console.log("자바스크립트 수업입니다.");
        break;
    case "css":
        console.log("CSS 수업입니다.");
        breack;
    case "html" :
        console.log("HTMl 수업입니다.");
        breack;
    default:
        console.log("모든 case 결과 일치하지 않습니다.");
}

//switch문 연습
let score = prompt ("점수를 입력해주세요.");
let value = Math.floor(score / 10);

switch (value){
    case 10: 
    case 9: 
        console.log("A 학점 입니다.");
    break;
    case 8: 
    case 7:
        console.log("B 학점 입니다.");
    break;
    default:
        console.log("A 학접 입니다. dsafsdf")
}