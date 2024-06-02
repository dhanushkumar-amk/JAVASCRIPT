// types of loops///  {..............................}*///
//
//
///
///
//
///
// 1 => for loop
// 2 => for each
// 3 => for in
// 4 => for of

let users = [
  {name: 'Dhanushkumar', gender: 'm'},
  {name: 'Sanjay Kumar', gender: 'm'},
  {name: 'ashwin', gender: 'm'},
  {name: 'Sanjay Kumar', gender: 'm'},

  {name: 'Sanjay Kumar', gender: 'm'},

  {name: 'Sanjay Kumar', gender: 'm'},
];

let person = {
  name: 'Dhanushkumar',
  age: 19,
  Country: 'India',
};

// for loop
// traditional for loop
// it has control syntax bu users developers
// used for large size of array

for (let index = 0; index < users.length; index++) {
  const element = users[index];
  //   if (index === 4) break;
  if (index === 4) continue;
  index++;
  //   console.log(element);
}

// another way to handle arrays using for loop
// for of loop
for (const user of users) {
  //   console.log(user);
}

// for each
// only used for arrays
// for each loop can't be break the array
//memory consumption is more

users.forEach((user) => {
  console.log(user);
});

// for in
// mainly used  for object
for (const key in person) {
  console.log(person[key]);
}
