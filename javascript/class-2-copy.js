var slNo = 1;
var nameVal = "xyz";
var isSuccuss = true;
var nullVal = null;
var undefinedVal = undefined;

var detail = {
    id: 1,
    name: 'Dinesh',
    subject: 'React',
    address: {
        street1: 'a',
        street2: 'b',
        city: 'BLR'
    },
    date:new Date()
};

var deepcopy={...detail};
console.log(deepcopy);


// var slNoCopy=slNo;
// console.log({slNo,slNoCopy});
// slNoCopy=2;
// console.log({slNo,slNoCopy});

// // shallow copy
// var detailCopy=detail;

// console.log({detail,detailCopy});
// detail.name='akash';
// detailCopy.id=5;
// console.log({detail,detailCopy});


// deep copy
// var detailCopy={...detail};
var detailCopy=JSON.parse(JSON.stringify(detail));
// var detailCopy=Object.assign({},detail);

// console.log({detail,detailCopy});
detail.name='akash';
detailCopy.id=5;
detailCopy.address.city='Mum';
console.log({detail,detailCopy});

console.log(Object.keys(detail));
const detailsCopyNew={...detail};
detailsCopyNew.address={...detailsCopyNew.address};

detailsCopyNew.address.city='Mumbai';
console.log({detail,detailsCopyNew});

