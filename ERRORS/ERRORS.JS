// error handling can be done by try catch throw finally

try{
console.log(1); // example for error
}
catch (error){
  console.log(error.message); // message is used to tell what error 
  console.log(error.name);  // name tells what type of error and error name
  console.log(error.stack);  // stack tells which line has error
 }
 finally{
  // finally always works  whenever error comes or not 
  console.log("Execution");
 }
 
 