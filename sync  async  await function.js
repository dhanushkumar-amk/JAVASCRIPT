/* * * * * * * * * * * * * * *
 *
 *
 *
 *
 *
 */

// promise

//  ? promise/*// used to write  async function code
// promise =  object

//  it have 3 state

// 1 => pending
// 2 => fullFilled State => gives value // success
// 3 => rejected  => gives reason

// promise syntax:

let promiseName = new Promise(function (resolve, reject) {
  resolve(); // when task success
  reject(); // when task cancelled or unsuccess
});

promiseName
  .then(function (value) {
    // call resolve function
    // code if successful
  })
  .catch(function (error) {
    // call reject function
    // code if some error
  });

// syntax:

let developer = true;

let promise = new Promise((myResolve, myReject) => {
  if (developer) {
    // default developer true
    myResolve('The project is Successfully Completed');
  } else {
    myReject('The project is Not Completed');
  }
});

// console.log(promise);

promise
  .then((resolveMessage) => {
    console.log(resolveMessage);
  })
  .catch((rejectMessage) => {
    console.log(rejectMessage);
  })
  .finally(() => {
    console.log('finally block is executed');
  });

// output

// true

//The project is Successfully Completed
// finally block is executed

// false

// The project is Not Completed
// finally block is executed

// another example

let anotherPromise = new Promise((resolve1, reject1) => {
  let bookingSuccess = true;

  if (bookingSuccess) {
    resolve1('The  Successfully ticket booked');
  } else {
    reject1('The  ticket booking  unsuccessful');
  }
});

anotherPromise
  .then((resolve1data) => {
    console.log(resolve1data);
  })
  .catch((reject1data) => {
    console.log(reject1data);
  });

// function resolve1data() {
//   console.log('send money');
// }

// function reject1data() {
//   console.log('sorry bro');
// }

// reject1data();
// resolve1data();

// !Synchronous and Asynchronous

// ? Synchronous
// default

// line by line execution
console.log('Synchronous process:');

console.log('First Line');
console.log('Second Line');
console.log('Third Line');

//output:

// Synchronous process
// First Line
// Second Line
// Third Line

// ? Asynchronous

// execution based by user definition
console.log('Asynchronous process:');

console.log('First Line');

setTimeout(() => {
  console.log('Second Line');
}, 1000);

console.log('Third Line');

// Synchronous process
// First Line
// Third Line

// one second later
// Second Line

// !  async(Asynchronous) and await function

// async and await are must

// ? promise

let asyncPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let user = {
      name: 'dhanush',
      address: 'pollachi',
    };
    if (Object.keys(user) !== 0) {
      resolve(user);
    } else {
      reject(user);
    }
  }, 2000);
});

async function getData() {
  //   alert('hello');
  let userInfo = await anotherPromise;
  console.log(userInfo);

  //   try {
  //     let userInfo = await promise;
  //     console.log(userInfo);
  //   } catch (errorMessage) {
  //     console.log(errorMessage);
  //   }
}

getData()
  .then((resolve) => {
    console.log('successfully Executed ');
  })
  .catch((reject) => {
    console.log('executed unsuccessfully');
  });
