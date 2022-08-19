function functionName(arg1, arg2) {
    // body statement
}

function showLog() {
    console.log('this is from showLog function');
    return true;
}

// console.log(showLog());
showLog()

// function showLogWithName(name) {
//     console.log('Name value ' + (name ? name : 'No details'));
// }
function showLogWithName(name = 'No Name') {
    console.log('Name value ' + name);
}
let nameVal='Dinesh';
showLogWithName(nameVal);
showLogWithName();

// Math.pow(23,4);
// 23**4;
function getPowerVal(baseVal=0,powVal=1){
    return Math.pow(baseVal,powVal);
}
console.log(getPowerVal(23,4));
console.log(getPowerVal(24));
console.log(getPowerVal());


const showLog1=function() {
    console.log('this is from showLog function');
}

showLog1();

let getPowerVal1=function(baseVal=0,powVal=1){
    return Math.pow(baseVal,powVal);
}
console.log(getPowerVal1(26,4));
console.log(getPowerVal1(24));
console.log(getPowerVal1());


// Arrow function 
const showLog2=()=>console.log('this is from showLog2 function');


showLog2();

let getPowerVal2=(baseVal=0,powVal=1)=> Math.pow(baseVal,powVal);

console.log(getPowerVal2(26,4));
console.log(getPowerVal2(24));
console.log(getPowerVal2());

let getPowerVal3=(baseVal=0,powVal=1)=> {
    const result=Math.pow(baseVal,powVal);
    console.log(result);
    return result;
}

console.log(getPowerVal3(26,4));
console.log(getPowerVal3(27,4));

(function(){
    console.log('form ananomous function');
})();

(function(name){
    console.log('form ananomous function, Author: '+name);
})('Dinesh Gopal Chand');

















