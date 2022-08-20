console.log('function constructor');
function studentDetails(name,school,loc){
    console.log(this); 
    this.name=name;
    this.school=school;
    this.loc=loc;
}

studentDetails('Din','SSVM','DHN'); // this keyword will refer Window object

var sdOIbject=new studentDetails(); // this keyword will refer  newly created function object ->sdOIbject
var sdOIbject1=new studentDetails('Dinee','SSVMee','DHNee'); // this keyword will refer  newly created function object ->sdOIbject1





