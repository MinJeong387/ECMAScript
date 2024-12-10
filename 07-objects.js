// 자바 스크립트 객체

// 객체 생성 방법 1
const person = new Object();
// 동적으로 속성 추가
person.name = "홍길동";
person.age = 28;
// 동적으로 메서드 추가
person.showInfo = function () {
    // this : 현재 인스턴스 자체
    let message =
        `Name: ${this.name}, Age: ${this.age}`;
    console.log(message);
}
console.log(person);
person.showInfo();

// 객체 생성 방법 2: JSON(JavaScript Object Notation)
console.log("=================================== JSON");
const person2 = {
    // 키 : 값
    name: "홍길동",
    age: 28,
    showInfo: function () {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

}
console.log(person2);
console.log(person2.name);
person2.showInfo();

// JSONW은 JS 객체 표기에도 중요하지만,
// 데이터 포맷으로 사용되기 때문에 중요

// Prototype 상속
console.log("=================================== 프로토타입 상속");
const Member = function (name, position) {
    this.name = name;
    this.position = position;
};
let m1 = new Member("강백호", "PF");
let m2 = new Member("서태웅", "SF");

console.log("m1:", m1);
console.log("m2:", m2);

// 동적으로 속성과 메서드를 추가할 수 있음
m1.sayHi = function () {
    console.log(`${this.name}님이 당신을 부릅니다.`);
}
m1.sayHi();
// m2.sayHi();
console.log("m1:", m1);
console.log("m2:", m2);

// 여러 인스턴스들의 공유 메모리영역인 prototype 영역에
// 공용 속성, 메서드를 구현하면 모든 인스턴스들이 
// 사용할 수 있다

console.log("m1의 constructor:", m1.constructor);
console.log("m2의 constructor:", m2.constructor);
// constructor가 가지고 있는 공유 메모리 영역
// -> prototype

Member.prototype.introduce = function () {
    console.log(`안녕, 나는 ${this.name}이야 !`);
}
console.log(Member.prototype);

m1.introduce();
m2.introduce();

// 원래 있던 기존 객체들에도 동적으로 속성과 메서드를 추가할 수 있다.
console.log(String.prototype);
String.prototype.sayHello = function () {
    return "Hello, " + this;       // this = 문자열 객체 그 자체
};
console.log("둘리".sayHello());

// TODO : this binding