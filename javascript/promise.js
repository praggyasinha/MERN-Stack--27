// new Promise((resolveOuter) => {
//     return resolveOuter(
//         new Promise((resolveInner) => {
//             setTimeout(resolveInner, 1000);
//         })
//     );
// }).then((res,err)=>{
//     console.log(res,err);
// });
// var userInput = 5;
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (userInput % 2 == 0) {
//             resolve({ message: "foo", number: userInput });
//         } else {
//             reject({ message: "Bar", number: userInput });
//         }

//     }, 300);
// });

// myPromise
//     .then(res => {
//         console.log(res);
//         return { ...res, newUpdatedNumber: res.number * 2 }
//     }).then(res => {
//         console.log(res);
//     }).catch(err => {
//         console.log(err);
//     }).then(() => {
//         console.log('inside: some more statement');
//     });

// console.log('some more statement');



// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'foo');
//     // setTimeout(reject, 1000, 'foo');
//     //   setTimeout(resolve=>'foo', 100);
// });

// Promise.all([promise1, promise2, promise3])
//     // .then((values) => {
//     //     console.log(values);
//     // })
//     .then(console.log)
//     // .catch(err => console.log(err));
//     .catch(console.log);



// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
// const promise3=34;
// const promises = [promise1, promise2,promise3];

// Promise.allSettled(promises).
//     then((results) => results.forEach((result) => console.log(result)));



const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];
// const promises = [promise1];

Promise.any(promises)
.then((value) => console.log(value))
.catch(console.log);