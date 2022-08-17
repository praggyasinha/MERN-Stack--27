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


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let dayCounter=0;randomDaylist[dayCounter]!=matchDay ; dayCounter++ ) {
    console.log('from for loop',randomDaylist[dayCounter]);
    
}

// randomDaylist[dayCounter1-1]!=matchDay 
// dayCounter1<randomDaylist.length







for (const dayname of randomDaylist) {
    console.log(dayname);
}
let studentList=[{
    id:1,
    name:'Rob',
    location:'USA'
},
{
    id:2,
    name:'Robin',
    location:'India',
    phone:'+9199999999'
},
{
    id:3,
    name:'Vam',
    location:'AUS',
    office:'TCS'
},{
    id:4,
    name:'Vamsi',
    location:'India'
}
];
console.log(studentList);

// window.addEventListener('load',function(){
//     console.log('load')
// })

for (const student of studentList) {
    console.log(student);  
    // console.log(student.id);  
    // console.log(student.name);  
    // console.log(student.location);  
}

window.addEventListener('DOMContentLoaded',function(){
    console.log('DOMContentLoaded');
    // const studentTable=document.getElementById('student-details').getElementsByTagName('tbody')[0];
    const studentTable=document.querySelector('#student-details tbody');
    if(studentTable){
        console.log(studentTable);
        let trElement='';
        for (const student of studentList) {
            console.log(student);  
            // console.log(student.id);  
            // console.log(student.name);  
            // console.log(student.location);  
            trElement+=`<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.location}</td>
        </tr>`;
        }
      
        studentTable.innerHTML=trElement;
    }
   



});

window.addEventListener('DOMContentLoaded',function(){
    let titleList=[];
    for (const student of studentList) {
        for (const key in student) {
            // console.log(key);
            
            if(titleList.indexOf(key)==-1){
                titleList.push(key);
            }
            // titleList.push(key);
            // console.log([...new Set(titleList)]);
        }
    }

    const studentTableAll=document.querySelector('#student-details-all');
    if(studentTableAll){

        // let thead='';
        // for (const title of titleList) {
        //     thead+=`<th>${title.toUpperCase()}`;
        // }
        // thead=`<thead>
        // <tr>${thead}</tr>
        // </thead>`;


        // const thead=`<thead>
        // <tr>${titleList.map(title=> `<th>${title}</th>`)}</tr>
        // </thead>`

        tbody='';
        for (const student of studentList) {
            tbody+='<tr>';
             for (const title of titleList) {
                tbody+=`<td>${student[title]?student[title]:''}</td>`;
             }
             tbody+='</tr>';
        }
        console.log(tbody);
        studentTableAll.innerHTML=thead+tbody;
    }
    console.log(titleList);
    console.table(studentList);
    // for (const key in studentList[1]) {
    //     console.log(key);
    // }
})

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


