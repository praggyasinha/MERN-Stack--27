
var numberList = [1, 3, 4, 54, 4, 4, 3, 3];
// numberList.map((value,index,arr)=>{
// console.log({value,index,arr});
// })
var updatedArray = numberList.map(item => {
    return item % 2 == 0 ? item * 2 : item * 3;
});
// console.log(updatedArray);

var studentsDetails = [
    { id: 1, name: 'a' },
    { id: 2, name: 'a' },
    { id: 3, name: 'a' },
    { id: 4, name: 'a' },
    { id: 5, name: 'a' },
    { id: 5, name: 'a' },
    { id: 6, name: 'a' }
];
var stDetails = studentsDetails.map(student => {
    // return  { id: student.id, name: student.name,formedName: `${ student.id} ${ student.name}`};
    return { ...student, id:student.id+100, formedName: `${student.id} ${student.name}` };
})
console.log(stDetails);





