// forEach : 배열 내부 요소들을 하나씩 추출, 콜백 함수로 전달
function testForEach() {
    console.log("================================================ testForEach");
    const source = ["Apple", "Banana", "Carrot", "Durian"];

    console.log("------------------------ 요소들만 전달");
    source.forEach(item => {
        console.log(item);
    })

    console.log("------------------------ 요소와 함께 인덱스 전달");
    source.forEach((item, index) => {
        console.log(`${index}번째 요소 -> ${item}`);
    })

    console.log("------------------------ 요소, 인덱스와 원본 배열까지 전달");
    source.forEach((item, index, arr) => {
        console.log(`${index} -> ${item} \t`, arr);
    })
}
// testForEach();

function testEverySome() {
    const data = [                                        // 객체의 배열
        { name: "홍길동", age: 28 },
        { name: "장길산", age: 35 },
        { name: "전우치", age: 25 }
    ];     

    console.log("원본 데이터:", data);

    // 모든 객체의 age가 25세 초과하는지 검증
    let result = data.every(obj => obj.age > 25);         // 검증 로직
    console.log("모든 인물의 나이가 25세 초과?", result);   // every : 조건 만족시 true

    // 일부 객체의 age가 25세 초과하는지 검증
    result = data.some(obj => {
        return obj.age > 25;
    })
    console.log("일부 인물의 나이가 25세 초과?", result);   // some : 조건 만족시 true
}
// testEverySome();





// 데이터 처리 파이프라인
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const source = [12, 4, 19, 33, 86];
// map -> filter -> sort -> reduce
function testMap() {
    // map -> 배열 형태는 그대로, 배열 요소를 변형
    console.log("================================================ map");
    console.log("원본 배열:", numbers);

    // numbers 배열의 모든 요소를 2배
    // 기존 방식의 구현
    let multiply = [];
    for (let i = 0; i < numbers.length; i++) {
        multiply.push(numbers[i] * 2);
    }
    console.log("기존 방식: 원본*2:", multiply);

    // MAP 방식의 구현 
    multiply = numbers.map(item => item * 2);
    console.log("MAP: 원본*2:", multiply);
}
// testMap();







function testFilter() {
    console.log("================================================ filter");
    // filter : 내부 요소는 그대로, 
    //          조건 만족하는 요소만 뽑아서 새 배열 생성

    // numbers 배열에서 짝수만 필터링
    let result = numbers.filter(item => item % 2 == 0);
    console.log("원본 데이터:", numbers);
    console.log("짝수 데이터:", result);
    console.log("3의 배수:", numbers.filter(item => item % 3 == 0));
}
// testFilter();





function testReduce() {
    console.log("================================================ reduce");
    // 가장 일반적인 Reduce -> 집계
    console.log("원본:", source);

    // source 배열의 모든 요소 합산
    let sum = source.reduce((acc, value, index, arr) => {
        console.log(
            `콜백 파라미터 (acc:${acc}, value:${value}, index:${index}, arr:${arr})`, acc + value
        );
        // acc   -> 현재까지의 집계 값
        // value -> 현재 값

        return acc + value;       // -> 다음번 콜백의 acc로 전달
    }, 0);                        // 초기값은 0
    console.log("합산 결과:", sum);
}
// testReduce();








function testReduce2() {
    // 반복되는 모든 것에는 reduce 함수를 적용할 수 있음
    // map함수를 reduce 함수로 구현
    // 모든 요소를 * 2 -> 새 배열 생성
    console.log("원본 배열:", numbers);

    let result = numbers.reduce((acc, value) => {
        console.log(`콜백 파라미터: (acc: ${acc}, value: ${value})`);
        acc.push(value * 2);
        console.log(` -> ${acc}`);

        return acc;
    }, []);

    console.log("요소 두배:", result);
}
// testReduce2();








function testReduce3() {
    // reduce를 이용, filter 함수 구현
    // numbers 배열의 요소 중 짝수만 필터링
    console.log("원본 배열:", numbers);
    let result = numbers.reduce((acc, value) => {
        if (value % 2 == 0) {
            acc.push(value);
        }
        return acc;
    }, []);
    console.log("짝수 배열:", result);
}
// testReduce3();












const data = [
    { name: "철수", kor: 85, eng: 92, math: 88 },
    { name: "영희", kor: 70, eng: 74, math: 95 },
    { name: "지후", kor: 91, eng: 89, math: 85 },
    { name: "지수", kor: 65, eng: 70, math: 72 },
    { name: "윤정", kor: 80, eng: 90, math: 91 }
];
// 데이터 파이프라인 구축 예제
function testDataPipeline() {
    console.log("================================================ map, filter, sort, reduce를 이용한 데이터 파이프라인");
    console.log("원본 데이터:", data);


    // map 함수 이용 -> total 파생 변수(기존 변수 이용해서 새로운 변수 만들어내는 작업)
    const studentsWithTotal = data.map(s => ({
        ...s,                     // {...s  바로 앞에 있는 (  이 괄호는? -> ( 괄호는 즉시 실행 함수를 정의하고, 그 함수의 반환값을 map 함수에 전달하여 새로운 배열을 생성하는 데 필수적인 역할
        total: s.kor + s.eng + s.math

    }));

    console.log("map:", studentsWithTotal);

    // filter 함수 이용 -> total >= 240 만 출력
    const filteredStudents = studentsWithTotal.filter(student => student.total >= 240);
    console.log("총점 240 이상:", filteredStudents);

    // sort 함수 이용 정렬 -> 총점 기준으로
    const sortedStudents = filteredStudents.sort(
        // (a,b) => a.total - b.total
        (a, b) => b.total - a.total
    );
    console.log("total 순 정렬:", sortedStudents);


    // reduce 함수 활용 -> 240점 이상 학생들의 총점 평균
    const totalSum = sortedStudents.reduce(
        (acc, student) => acc + student.total, 0
    );
    console.log("총점 240 이상인 학생들의 총점:", totalSum);
    const avgTotalSum = totalSum / sortedStudents.length;

    console.log("총점 240 이상인 학생들의 평균:", avgTotalSum);
}
testDataPipeline();







console.log(
    "데이터 파이프라인 구축:",
    data
        .map(student => ({
            ...student, total: student.kor + student.eng + student.math
        }))
        .filter(student => student.total >= 240)
        .sort((a, b) => b.total - a.total)
        .reduce((acc, student) => acc + student.total, 0) / 3
);
