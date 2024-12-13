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
logicA();