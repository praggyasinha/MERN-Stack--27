const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        console.log(this)
        this.value4='some value';
        return this.firstName + " " + this.lastName;
    },
    fullnameArrow:()=>{
        this.value='some value';
        return this;
    },
    newDetails: {
        firstName: "John1",
        lastName: "Doe1",
        id: 55663,
        fullNameChild: function () {
            this.value2='some value';
            console.log(this);
            return this.firstName + " " + this.lastName;
        },
        fullnameChildArrow:()=>{
            // console.log(this);
            this.value1='some value';
            return this;
        },
    }
};

// console.log('1 ',person.fullName());
// console.log('2 ',person.fullnameArrow());
console.log('3 ',person.newDetails.fullNameChild());
console.log('4 ',person.newDetails.fullnameChildArrow());