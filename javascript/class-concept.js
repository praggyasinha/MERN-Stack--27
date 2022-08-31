// function showDetails(name,add){
//     this.name=name;
//     this.address=add;
//     console.log(this);
// }
// showDetails();
// showDetails('Dinesh','India');
// new showDetails();
// new showDetails('Dinesh11','India');


// class ShowDetails{
//     constructor(name, add){
//         this.name=name;
//         this.address=add;
//     }
//     showLog(){
//         console.log(this);
//     }
//     showFullDetails(){
//         return `${this.name} ${this.address}`;
//     }
// }

// class Calculation{
//     static randowNumber(){
//         return Math.random();
//     }
//     getAbsoluteNumber(num){
//         return Math.abs(num);
//     }
// }

// // (new ShowDetails('dinesh','India')).showLog();
// let showDetailsObj=new ShowDetails('dinesh','India');
// showDetailsObj.showLog();


// console.log(Calculation.randowNumber());
// let calcObj=new Calculation();
// console.log(calcObj.getAbsoluteNumber(-243));


// class Counter{
//     static count=0;
//     constructor(){
//         Counter.count++;
//     }
//     getCountValue(){
//         return Counter.count;
//     }
// }

// let counObj=new Counter(); //1
// console.log(counObj.getCountValue());
// let counObj1=new Counter(); // 2
// console.log(counObj.getCountValue());
// console.log(counObj1.getCountValue());
// let counObj2=new Counter(); // 3
// console.log(counObj1.getCountValue());
// let counObj3=new Counter(); // 4
// console.log(counObj.getCountValue());


class Student {
    _name = 'dinesh';
    constructor(name) {
        console.log('inside constructor', this.name);
        this._name = name;
    }

    // getName(){
    //     return this.name;
    // }

    // setName(newName){
    //     this.name=newName;
    // }
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}
let studentObj = new Student('Gopal');
console.log(studentObj.name);
studentObj.name = 'Chand';
console.log(studentObj.name);




