// console.log('some log');
// let sumValue = 1 + 1;
// console.log(sumValue);
// let pow = Math.pow(45, 23);
// console.log(pow);

// var count = 0;
// const intervalTimer=setInterval(() => {
//     count++;
//     console.log(count);
//     // if(count==10){
//     //     clearInterval(intervalTimer);
//     // }
// },500);

// console.log('after setInerval:::::::::::::');
// setTimeout(function(){
//     console.log('from settimeout');
// },1000);
// console.log('after setTimeout------------');

// setTimeout(function(){
//     clearInterval(intervalTimer);
// },10000);

// for (var count = 0; count <= 2; count = count + 1) {
//     setTimeout(function(){
//         console.log(count);
//     },500);  
//     // console.log(count);
//     //statement
// }
// console.log({ count });
// count -> condition -> increament
// 0 -> true -> 1
// 1 -> true -> 2
// 2 -> true -> 3
// 3 -> false ->break



// for (let count1 = 0; count1<=2; count1++) {
//     setTimeout(function(){
//         console.log(count1);
//     },500);
//     console.log({count1});
// }
// console.log(count1);


// var result=0;
// setTimeout(function () {
//     result=3;
// }, 500);
// console.log(result);
// var result = 0;
// const promiseObject = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         result = 3;// some calculation
//         resolve(result);
//         // console.log(result,'sdfsdf');
//     }, 5000);
// });
// promiseObject.then(res=>{
//     console.log({res});
// })
// console.log({result});

// https://developer.mozilla.org/en-US/docs/Web/JavaScript



// const promiseObject = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         result = 3;// some calculation
//         resolve(result);
//         // console.log(result,'sdfsdf');
//     }, 5000);
// });
// promiseObject.then(res=>{
//     console.log(res);
//     return Promise.resolve(res*2);
// }).then(response=>{
//     console.log(response);
//     // console.log('after promise');
// });
// console.log('after promise');

const asyncResFuntion = async function () {
    const promiseObject=  new Promise((resolve, reject) => {
        setTimeout(function () {
            result = 3;// some calculation
            resolve(result);
            // console.log(result,'sdfsdf');
        }, 5000);
    });
    return await promiseObject;
}

async function processResponse(){

    // asyncResFuntion().then(res=>{
    //     console.log({res});
    // })
    // .then(()=>console.log('step 1'))
    // .then(()=>console.log('step 2'))
    // .then(()=>console.log('step 3'))
    // .then(()=>console.log('step 4'));
    const asyncRes= await  asyncResFuntion();
    console.log( {asyncRes})
}
processResponse()


// console.log('after promise');





