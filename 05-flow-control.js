// if ~ else if ~ else
// switch ~ case
// for, while, do while
// 모두 C계열 문법과 거의 동일

// 연습문제 1-1) for 문 구구단
// 2단 ~ 9단까지 루프 돌며 출력
for (let i = 2; i < 10; i++) {
    let result = '';
    for (let j = 1; j < 10; j++) {
        result += `${i}*${j}=${i * j} \t`;
    }
    console.log(result);
}
console.log("===============================================================================");

// 연습문제 1-2) while 문 구구단
// 2단 ~ 9단까지 루프 돌며 출력
let i = 2;
while (i < 10) {
    let j = 1;
    let result = '';
    while (j < 10) {
        result += `${i}*${j}=${i * j} \t`;
        j++;
    }
    console.log(result);
    i++;
}
console.log("===============================================================================");

// 연습문제 2-1) for 문을 이용 별 그리기
for (let i = 5; i >= 1; i--) {
    console.log("*".repeat(i));
}
console.log("===============================================================================");

// 연습문제 2-2) while 문 용 별 그리기
let k = 5;
while (k >= 1) {
    console.log("*".repeat(k));
    k--;
}



// 1-1 풀이
console.log("============================== for문 구구단");
for (let dan = 2; dan <= 9; dan++) {
    console.log(dan + "단");
    for (let num = 1; num <= 9; num++) {
        console.log(dan, "*", num, "=", dan * num);
    }
}

// 1-2 풀이
let dan = 2;    // 반복 변수 초기화
console.log("============================== while문 구구단");
while (dan <= 9) {
    console.log(dan + "단");
    let num = 1;
    while (num <= 9) {
        console.log(dan, "*", num, "=", dan * num);
        num++;
    }
    dan++;
}

// 2-1 풀이
console.log("============================== for문 역삼각형");
for (let row = 5; row > 0; row--) {
    let stars = "";
    for (let col = 1; col <= row; col++) {
        stars += "*";
    }
    console.log(stars);
}

// 2-2 풀이
console.log("============================== while문 역삼각형");
let row = 5;
while (row > 0) {
    let stars = "";
    let col = 1;
    while (col <= row) {
        stars += "*";
        col++;
    }
    console.log(stars);
    row--;
}