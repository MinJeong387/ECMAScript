// 배열
// 생성 1. Array 객체 이용
const v1 = new Array(10);               // 10개짜리 빈 배열
const v2 = new Array();                 // 빈 배열
const v3 = new Array(1, "ABC", true);   // 초기화 배열
console.log(v1, v1.length);
console.log(v2, v2.length);
console.log(v3, v3.length);

// 생성 2. 리터럴로 생성 (추천)
const v4 = [];                          // 빈 배열
const colors = ["red", "green", "blue", "yellow"];

// 타입 체크
console.log(typeof v4, typeof colors);
// 특정 객체가 Array인지 확인
console.log(Array.isArray(v4), Array.isArray(colors));
// 기본 값으로 채우기: .fill
const v5 = new Array(10).fill(1);
console.log(v5);
v5.fill("a");
console.log(v5);
// 객체도 배열처럼 접근할 수 있음
const person = {
    name: "홍길동",
    age: 28
};
console.log(person['name'], person['age']);

// 자바스크립트의 배열은 인덱스 범위를 엄격히 체크하지 않음
const arr = [];
console.log(arr, arr.length);
// 인덱스 범위를 벗어난 배열의 접근
arr[10] = 2024;
console.log(arr, arr.length);


console.log("=================================== Methods");
// 배열 합치기 : concat
const veges = ["배추", "무", "쪽파"];
const sources = ["소금", "고춧가루", "새우젓"];
const ingr = veges.concat(sources);
console.log(ingr);

// join: 특정 문자열 기준 합치기
console.log("김장 재료: ", ingr.join(", "));

// push, pop -> Stack 자료형처럼 사용 가능
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits);
fruits.push("Kiwi");
console.log(fruits);
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits);            // ['Apple', 'Banana']

fruits.push('Orange', 'Mango', 'Kiwi');
console.log(fruits);
console.log(fruits.shift());    // Apple
console.log(fruits.shift());    // Banana
console.log(fruits.shift());    // Orange
console.log(fruits);            // ['Mango', 'Kiwi']



console.log("****************************************************************");
console.log("=================================== Splice");
// Splice

// 매개변수가 1개: 해당 인덱스부터 끝까지 추출 후 제거
fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
console.log(fruits);
console.log(fruits.splice(2));
console.log(fruits);
console.log("=================================================================");

// 매개변수가 2개: 첫번째 매개변수 인덱스 ~ 두번째 매개변수 갯수만큼 추출 후 삭제
fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
console.log(fruits);
console.log(fruits.splice(2, 1));
console.log(fruits);
console.log("=================================================================");

// 매개변수가 3개 이상: 첫번째 매개변수 인덱스 ~ 두번째 매개변수 갯수만큼 추출 후 삭제, 
//                     세번째 이후 매개변수를 요소로 추가
fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];
console.log(fruits);
console.log(fruits.splice(2, 1, "Guava", "Grape"));
console.log(fruits);
console.log("=================================================================");


console.log("=================================== reverse");     // 순서 반전
console.log("원본:", fruits);
fruits.reverse();
console.log("REVERSE:", fruits);

console.log("=================================== slice");       // 추출
console.log("원본:", fruits);
let slices = fruits.slice(2, 5);
console.log("SLICE:", slices);

console.log("=================================== sort1");        // 정렬1 (오름차순)
fruits = ['Kiwi', 'Mango', 'Grape', 'Guava', 'Banana', 'Apple'];
console.log("원본:", fruits);
fruits.sort();                                                  // 기본은 오름차순
console.log("SORT1:", fruits);


console.log("=================================== sort2");        // 정렬2 (역순 = 내림차순)
fruits = ['Kiwi', 'Mango', 'Grape', 'Guava', 'Banana', 'Apple'];
console.log("원본:", fruits);
fruits.sort((v1, v2) => {
    // 역순 정렬
    // 0이면 순서가 같다 (변경 없음)
    // 0보다 작을 때 => v1이 앞으로
    // 0보다 클   때 => v2가 앞으로
    if (v1 < v2) return 1;
    if (v1 > v2) return -1;
    if (v1 == v2) return 0;
});
console.log("SORT2:", fruits);


console.log("=================================== sort3");        // 정렬3 (문자열 길이 순)
fruits = ['Kiwi', 'Mango', 'Grape', 'Guava', 'Banana', 'Apple'];
console.log("원본:", fruits);
// 문자열 길이 순으로 정렬
fruits.sort((v1, v2) => {
    return v1.length - v2.length;
})
console.log("SORT3:", fruits);


console.log("=================================== String::split");
// split
// 구분자를 기준으로 문자열 분할 -> 배열로 반환
const str = "JavaScript is something strange than other languages";
console.log(str);
let chunks = str.split(' ');    // 공백 문자를 기준으로 분리
console.log(chunks);
for (let i = 0; i < chunks.length; i++) {
    console.log(chunks[i]);
}