//closures
// var count = 0
// const counter=function() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//         return count;
//     }
// }

// const innerFunction=counter();
// innerFunction();
// innerFunction();
// innerFunction();
// innerFunction();
// innerFunction();
// innerFunction();
// // counter()();
// // counter()();

const counter=(function() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
        return count;
    }
})();
counter();
counter();
counter();
counter();
counter();