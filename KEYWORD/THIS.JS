// this is a  reference variable 
// which refers to the current variable







// const myName = "Dhanush"



function nameFunc(myName,myAddress){
  
  this.myName = myName;
  this.myAddress = myAddress;
    console.log(this.myName);
}




let object =new nameFunc();