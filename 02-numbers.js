// ECMAScript의 Number
// -> 산술 연산이 가능한 데이터
let n1 = 7; // Literal (소스에 직접 입력)
let n2 = Number(7); // Number 객체를 이용한 생성
console.log(n1, "==", n2, "?", n1 == n2);
console.log(typeof n1, typeof n2);

// 다양한 방식의 데이터 입력
const red = 0xff0000;   // 16진수
const oct = 0o755;      // 8진수
const bin = 0b1101;     // 2진수

console.log(red, oct, bin);

// Math 내장 객체
console.log(Math.round(3.5678));
console.log(Math.max(1, 5, 3, 2, 6, 7), Math.min(1, 5, 3, 2, 6, 7));
console.log(Math.round(3.567), Math.trunc(3.567), Math.floor(3.567));
console.log("======================= Casting");
// 자바스크립트는 변수 선언시 데이터 타입을 지정하지 않고,
// 중간에 데이터 타입이 변경될 수 있으므로 
// 데이터 형 변환이 필요한 경우가 많다

// parseInt, parseFloat : Number 타입으로 변환하는 함수
console.log(parseInt("011"), typeof parseInt("011"));
console.log("11"+"12");
console.log(parseInt("11")+parseInt("12"));

console.log(parseInt("011",2));       // 진법 변환
console.log(parseInt("0xFF0000",16));
console.log(parseInt("123.456"));     // 정수 형태만 변환
console.log(parseFloat("123.456"));   // 실수 전체

console.log(parseInt(Math.PI));       // float -> int

// 숫자로 변환할 수 없는 형태의 문자열을 반환하면 -> NaN
let v = parseInt("a12345");
console.log(v, "->", typeof v);

// NaN가 포함된 연산의 결과는 -> NaN
console.log(v, "* 3", "=", v * 3);

// number 데이터가 NaN인지 확인하려면 isNaN 함수
console.log(v, "is NaN?", isNaN(v));

console.log("======================= Infinity");
console.log("1/0 =", 1/0);

// 유한수(Finite) 확인 함수 (isFinite)
console.log("1/0 is Finite?", isFinite(1/0));
console.log("2024 is Finite?", isFinite(2024));
console.log("NaN is Finite?", isFinite(parseInt("abc")));

// Infinity와 수치형 데이터의 산술 연산 -> Infinity
let result = 1/0 + 2024;
console.log(result, typeof result);