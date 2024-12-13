function logicA() {
    console.log("begin logic A");
    setTimeout(() => {
        console.log("callbackA called");
        console.log("begin logicB");
        setTimeout(() => {
            console.log("callbackB called");
            console.log("begin logicC");
            setTimeout(() => {
                console.log("callbackC called");
            }, 2000);
            console.log("end logicC");
        }, 2000);
        console.log("end logicB");
    }, 2000);
    console.log("end logicA");
}
// logicA();
// 비동기 처리를 수행하되 흐름을 동기방식처럼 처리할 필요가 있다
// -> Promise

function logicPromise() {
    console.log("begin logicPromise");

    return new Promise(function (resolve, reject) {
        // resolve => fullfill 상태로 이전시킬 때 사용하는 콜백
        // reject => rejected 상태로 이전시킬 때 사용하는 콜백
        console.log("begin logicPromise");
        setTimeout(() => {
            // resolve("RESOLVE");
            reject("REJECTED");
        }, 3000);
    })
}

function testLogicPromise() {
    console.log("Test Logic Promise");
    logicPromise()     // Promise
        // .then : promise가 fullfill 상태로 이전할 때 호출
        .then(value => { console.log("PROMISE resolve:", value) })
        .catch(reason => { console.error("PROMISE reject:", reason) });
}
// testLogicPromise();





// 좀 더 편하게 비동기 구현을 위해 async/await 키워드를 이용
// async 함수는 비동기 처리를 위해 Promise를 반환한다.
async function f() {
    console.log("async function");
    return 1;
}
console.log("Before f()");
f().then(console.log);
console.log("End Of Code");






// 가상 시나리오
// promise를 이용해서, 네트워크 통신(Ajax)으로 데이터를 가져올 때
function fetchData() {
    // 네트워크 통신 : 가정
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("서버로부터 가져온 데이터");
        }, 3000);
    })
}

async function processData() {
    console.log("데이터를 가져오는 중...");

    // await 키워드 : Promise가 해결될 때까지 코드를 일시 중단시킴
    // Promise가 해결되면 await는 Promise의 결과를 반환
    const data = await fetchData();
    console.log("가져온 데이터:", data);
}
processData();