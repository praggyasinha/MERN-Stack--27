function add(...args){ // rest operator
    console.log(args);
    // return n1+n2+n3;
    const sumValue=args.reduce((sum,num)=>sum+num);
    return sumValue;
}
console.log(add(1,2,3,2,2,3,3,2,32,532));

var numberList = [1, 3, 4, 54, 4, 4, 3, 3];
var numList=[453,3,2243232];

console.log('ssssss',numberList.concat(numList));
// numberList.push(...numList);
// console.log(numberList);

// console.log([...numberList,...numList])

console.log({
    ...{ id: 1, name: 'a' },value:'ewwrewrew'
});


