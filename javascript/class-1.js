// console.log("Javascript first session");
// var topicName = "Variable introduction";

// // // var 2name='dinesh'; X
// // var _name='dinesh';
// // var $name='dinesh';
// // var name='dinesh';
// // var Name='dinesh';
// // var name1='dinesh';
// // var name2='dinesh';
// // var name2='dinesh';

// // 0-1
// // $
// // _
// // a-z
// // A-z

// /*
// schoolname='xyz';
// schoolName -> camelcase
// school_name
// */

// var name = "dinesh";
// console.log(name);
// var name = "Chand";
// console.log(name);
// var name = 23;
// console.log(name);
// name = true;
// // var - re-decleration | re-assignment are allowed

// let name1 = "Gopal";
// console.log(name1);
// let name2 = "Gopal";
// name1 = "Gopal chand";
// console.log(name1);
// name1 = "dinesh " + name1;
// console.log(name1);
// // re-decleration not allowed | re-assignment are allowed

// const mobNumber = "+91-999999999";
// // mobNumber='+91-8888888';
// console.log(mobNumber);

// // re-decleration not allowed | re-assignment not allowed

// // console.log(window);
// // setTimeout(function(){

// //     console.log('form setTimeout-direct function call');
// // },2000)
// // window.setTimeout(function(){

// //     console.log('form setTimeout - using window');
// // },2000)

// //  globalThis  will refer
// // window object in browser
// // global object in node

// // Hoisting

// console.log(institueName);
// var institueName='SDLC training';
// //   console.log(institueName);

// // institueName='SDLC training bangalore';
// console.log(institueName);

var slNo = 1;
var nameVal = "xyz";
var isSuccuss = true;
var nullVal = null;
var undefinedVal = undefined;
console.log(typeof slNo);
console.log(typeof slNo);
console.log(typeof nameVal);
console.log(typeof isSuccuss);
console.log(typeof nullVal);
console.log(typeof undefinedVal);


var subjectList = ["C++", "java", "react", "nodejs"];
console.log(subjectList);
console.log(subjectList[0]);
console.log(subjectList[1]);
console.log(subjectList[2]);
console.log(subjectList[3]);

console.log(typeof subjectList);

var details = {
    id: 1,
    name: 'Dinesh',
    subject: 'React',
    location: 'BLR'

};
console.log(details);
console.log(details.id);
console.log(details.location);
console.log(details.subject);
console.log(details.name);
console.log(typeof details);


var checkArr = Array.isArray(subjectList);
console.log(checkArr);

const schoolsName = [];
var checkArr1 = Array.isArray(schoolsName);
console.log(checkArr1);

var checkArr2 = Array.isArray(details);
console.log(checkArr2);

console.log(nullVal === null);

var detail = {
    id: 1,
    name: 'Dinesh',
    subject: 'React',
    address: {
        street1: 'a',
        street2: 'b',
        city: 'BLR'
    }
};
console.log(detail.address.city);

function sum(num1,num2){
    console.log(num1+num2);
}
console.log(typeof sum);
const sumObj=new sum(1,2);
console.log(typeof sumObj);
// console.log( sumObj instanceof sum );
console.log(JSON.stringify(detail));
// console.log(JSON.parse(JSON.stringify('sdfs')));

console.log(subjectList.length);
var someArr=[];
console.log(someArr.length ==0);

console.log(Object.keys(detail).length==0); // to check empty object
var someObj={};
console.log(Object.keys(someObj).length==0); // to check empty object




