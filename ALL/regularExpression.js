// Regular Expression/////
//
//
//'
///
///
///
//

//
//
//
//
//
//
//
//
//
//
//
//
///
//
//
//
//
//
//
///
///
///
//

//
//
//
//
//
//
//
// used to validation and search expression
// let pattern = /[a-z]/;

// + instead next character
// let pattern = / [a-z]+[0-5]/;

// * first character is optional
// let pattern = / [a-z]*[0-5]/;

// ? question mark for 0 or 1 time is repeating
// let pattern = / [a-z]?[0-5]/;

// {1, 5} first pattern matches 1 time inside the brackets refers to the no of times
// 1 refers to the minimum and 5 refers to the maximum
// let pattern = / [a-z]{1, 5}[0-5]/;

// used to square brackets
//    /test/ => inside the two brackets

let pattern = /^[a-z]/;
const input = 'a ';
const match = pattern.test(input);
console.log(match);

//? search
// const match2 = input.match(pattern);
// console.log(match2);

// anchors
// types
// start => ^
// ^ not
// end => $

// short hands =>
// \d refers to the numbers
// \s refers to the space
// \b refers to the boundaries
// \w refers to the word characters  => underScore , alphabets, numbers are assume as a word character

//escape characters =>

// negative scenario handles
//  => above short hands used in uppercase is negative scenario
// \D refers to the numbers
// \S refers to the space
// \B refers to the boundaries
// \W refers to the word characters  => underScore , alphabets, numbers are assume as a word character

// i for case insensitive so both upper case and lower case  combine

// | or operator
