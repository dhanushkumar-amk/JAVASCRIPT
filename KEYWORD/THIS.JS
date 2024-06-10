// this is a  reference variable 
// which refers to the current variable





// const myName = "Dhanush"



/// this function using function

function nameFunc(myName,myAddress){
  
  this.myName = myName;
  this.myAddress = myAddress;
    console.log(this.myName);
    console.log(this.myAddress);
}


let object =new nameFunc("Hello","amk");


