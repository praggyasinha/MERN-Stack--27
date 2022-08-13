// true -> Work
// false -> No work

// var numberValue=34;
// if (numberValue%2==0) {
//     // console.log(numberValue+ ' is even number');
//     console.log(`${numberValue} is even number`);
// }

// if (numberValue%2==0) {
//     console.log(`${numberValue} is even number`);
// } else {
//     console.log(`${numberValue} is odd number`);
// }

// const scoredMarks=30;
// let rank='';
// if (scoredMarks>=60) {
//     rank='first';
// } else if (scoredMarks>=50) {
//     rank='second';
// }else if (scoredMarks>=40) {
//     rank='Third';
// }else{
//     rank='fail'
// }
// console.log(` you have scored ${scoredMarks}, Position: ${rank}`);

// const currentDate=new Date('08/14/2022');
const currentDate = new Date();
console.log(currentDate);
const currentDay = currentDate.getDay();
console.log(currentDay);
const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
console.log(daylist[currentDay]);



let currentDateName = '';

switch (currentDay) {
    case 0:
        // statement
        currentDateName = 'Sunday';
        break;
    case 1:
        // statement
        currentDateName = 'Monday';
        break;
    case 2:
        // statement
        currentDateName = 'Tuesday';
        // state 2
        // state 3
        // state 4
        // state 5

        break;
    case 3:
        // statement
        currentDateName = 'Wednesday';
        break;
    case 4:
        // statement
        currentDateName = 'Thrusday';
        break;
    case 5:
        // statement
        currentDateName = 'Friday';
        break;
    default:
        // statement
        currentDateName = 'Saturday';
        break;
}
console.log(currentDateName);

const inputedNumber = 23;
switch (inputedNumber % 2) {
    case 0:
        // statement
        console.log('even')
        break;
    default:
        console.log('odd')
}

// ternary operation

var numberValue = 35;

// if (numberValue%2==0) {
//     console.log(`${numberValue} is even number`);
// } else {
//     console.log(`${numberValue} is odd number`);
// }
console.log(`${numberValue} is  ${numberValue % 2 == 0 ? 'even' : 'odd'} number`)

const numberOddEvenStatus = numberValue % 2 == 0 ? 'even' : 'odd';
console.log(`${numberValue} is  ${numberOddEvenStatus} number`)

// 2
// 22
// 21
// 23

// case it should be even
// case or it should divisible by 3

const acceptanceStatus = numberValue % 2 == 0 ?
    'Accepted' : (
        numberValue % 3 == 0 ?
            'Accepted' :
            'Rejected'
    );
console.log(acceptanceStatus);

