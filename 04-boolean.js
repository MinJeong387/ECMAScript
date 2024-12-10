// 비교/논리 연산의 결과값
let v1;                 // -> 선언만. 할당하지 않음
let v2 = null;

// undefined : 자바스크립트 엔진이 할당하는 값
// null : 개발자가 직접 할당하는 값
console.log(v1,v2);
console.log(v1==v2);        // == : 값의 형태만 비교
console.log(v1, typeof v1, v1==undefined);
console.log(v2, typeof v2, v1==null);

// == : 타입과 상관 없이 값만 비교
// === : 값과 함께 타입도 비교
console.log(123=="123");
console.log(123==="123");

// Boolean
let a = 7;
let b = 5;

let b1 = a > b;             // 비교 연산의 결과
let b2 = b >=0 && b <=10;   // 논리 연산의 결과
// 논리 연산자 : AND(&&), OR(||), NOT(!) -> 논리 결과 조합
console.log(b1,b2);

console.log("==============================");
// Boolean 타입 함수를 이용한 Boolean 판정
// number : 0의 값인 경우 false
// string : 내용이 있으면 true, 빈 문자열이면 false
console.log(Boolean("ECMAScript"),Boolean(""));
console.log(Boolean(2024), Boolean(0));
console.log("==============================");

// ShortCircuit
console.log(true && "Test");
console.log(false && "Test");

console.log(true || "Test");
console.log(false || "Test");
// React의 선택적 랜더링에 많이 활용