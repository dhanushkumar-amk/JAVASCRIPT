//  ? promise/*
used to write  async function code

promise =  object
 it have 3 state

1 => pending
2 => fullFilled State => gives value
3 => rejected  => gives reason

var promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('we have failed');
  }, 2000);
  setTimeout(() => {
    var user = {name: 'dhanush'};
    resolve('completed');
  }, 5000); // 5000 second
});

console.log(promise);
promise then method

/*promise.then((result) => {
  console.log('Result :', result);
});
console.log(promise);

 

*/
