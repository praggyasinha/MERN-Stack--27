console.log('from loop page');
// initilization 
// increament/decre
// condition checking to get out of the loop

// 1,2,3,4....100

// i=1
// i++;
// i<=100

const randomDaylist = ['Sunday',  'Tuesday', 'Thrusday', 'Friday','Wednesday', 'Saturday','Monday'];

var i=1
while (i<=100) {
    console.log(i);
    i++;
}

let dayCounter=0;
// let matchDay='Sunday';
// let matchDay='Tuesday';
let matchDay='Saturday';

while (randomDaylist[dayCounter]!=matchDay) {
    console.log(randomDaylist[dayCounter]);
    dayCounter++;
}




// let dayCounter1=0;
// do {
//     console.log(randomDaylist[dayCounter1]);
//     dayCounter1++;
// } while (randomDaylist[dayCounter1-1]!=matchDay );



for (let dayCounter=0;randomDaylist[dayCounter]!=matchDay ; dayCounter++ ) {
    console.log('from for loop',randomDaylist[dayCounter]);
    
}

// randomDaylist[dayCounter1-1]!=matchDay 
// dayCounter1<randomDaylist.length

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// randomDaylist.forEach(day => {
//     console.log(day);
// });
// console.log('some log');




for (const dayname of randomDaylist) {
    console.log(dayname);
}

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


