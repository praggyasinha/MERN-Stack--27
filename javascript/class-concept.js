// function showDetails(name,add){
//     this.name=name;
//     this.address=add;
//     console.log(this);
// }
// showDetails();
// showDetails('Dinesh','India');
// new showDetails();
// new showDetails('Dinesh','India');


class ShowDetails{
    constructor(name, add){
        this.name=name;
        this.address=add;
    }
    showLog(){
        console.log(this);
    }
}

// let showDetailsObj=new ShowDetails('dinesh','India');
// showDetailsObj.showLog();
(new ShowDetails('dinesh','India')).showLog();