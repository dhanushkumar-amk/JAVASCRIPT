/** prototype some() *//** Determines whether the specified callback function returns true for any element of an array. */
const users = [
  {
    name: 'dhanushkumar',
    id: 1,
    active: true,
  },
  {
    name: 'Sanjay kumar',
    id: 2,
    active: true,
  },
  {
    name: 'ashwin',
    id: 3,
    active: false,
  },
];

const result = users.some((user) => user.active === true);
console.log(result);

// some condition allows if any one condition is  true then return true if no one condition is  true then return false

// if any one match the condition then return true else return false
