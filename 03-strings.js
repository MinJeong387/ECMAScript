// string : 유니코드 문자의 연결 구조
const s1 = "Modern JavaScript and Java";
const s2 = String("Modern JavaScript");
console.log(typeof s1, typeof s2);

// property : .length -> 문자열 길이
console.log(s1, ", length=", s1.length);

// 문자열 추출 메서드 : zero-base
console.log(s1.charAt(7));           // 인덱스 7의 문자
console.log(s1[7]);                  // 문자열은 배열처럼 취급
console.log(s1.substr(7,10));        // 인덱스 7부터 10개 -> deprecated (폐지 예정)
console.log(s1.substring(7,17));     // 인덱스 7부터 17 앞까지
console.log(s1.substring(7));        // 인덱스 7부터 끝까지