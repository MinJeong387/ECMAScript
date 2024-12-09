// string : 유니코드 문자의 연결 구조
const s1 = "Modern JavaScript and Java";
const s2 = String("Modern JavaScript");
console.log(typeof s1, typeof s2);

// property : .length -> 문자열 길이
console.log(s1, ", length=", s1.length);

// 문자열 추출 메서드 : zero-base
console.log(s1.charAt(7));          // 인덱스 7의 문자
console.log(s1[7]);                 // 문자열은 배열처럼 취급
console.log(s1.substr(7,10));       // 인덱스 7부터 10개 -> deprecated (폐지 예정)
console.log(s1.substring(7,17));    // 인덱스 7부터 17 앞까지
console.log(s1.substring(7));       // 인덱스 7부터 끝까지

// 문자열 검색 메서드
console.log("원본:", s1);

let pos = s1.indexOf("Java");
console.log("1st Search:", pos);    // 첫 번째 Java의 위치
pos = s1.indexOf("Java", pos + 4);  // 검색 시작위치 재정의
console.log("2nd Search:", pos);    // 두 번째 Java의 위치

pos = s1.indexOf("Java", pos + 4);  // 검색어를 찾지 못함
console.log("No Keyword:", pos);    // -1 : 없음

pos = s1.lastIndexOf("Script");     // 뒤로부터 앞으로 검색
console.log("lastIndexOf:", pos);

// 문자열 치환
console.log("원본:", s1);
console.log("replace:", s1.replace("JavaScript","ECMAScript"));
console.log("원본:", s1);           // 원본 유지

// 좌우 화이트 스페이스 제거
const noisyStr = "          Hello, ECMAScript           ";
console.log(noisyStr);
console.log(noisyStr.trim());

// 문자열 보충 수업
// 이스케이프 문자 -> 매우 유의
// \n : 줄바꿈
// \t : 탭
// \' : 작은 따옴표
// \" : 큰 따옴표
// \` : 백틱(ES6)       -> 여러줄 문자 한번에 처리
// \$ : 달러 기호(ES6)  -> 백틱이랑 같이 쓸 때, 한번에 처리 가능. 특히 여러줄 문자 쓸 때 유용

let message = 'He said, "Hello"';
console.log(message);
message = "He said, \"Hello\"";
console.log(message);

// 현재 실내 온도는 __ 도 입니다.
let temp = 23;
message = "현재 실내 온도는 " + temp + " 도 입니다.";
console.log(message);

// 템플릿 문자열 : 백틱(`), ${}
message = `현재 실내 온도는 ${temp} 도 입니다.`;
console.log(message);

// 여러 줄 문자열도 템플릿 문자열로 쉽게 표현 가능
message = "예전에는 여러 줄\n문자열을 만드는 게\n쉽지 않았습니다.";
console.log(message);

message = `
하지만 ES6에서는
    아주 손쉽게
    여러 줄 문자열을 만들 수 있습니다.`;
console.log(message);