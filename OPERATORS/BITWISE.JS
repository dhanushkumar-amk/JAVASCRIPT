// BITWISE AND &
// BITWISE OR
// BIT WISE NOT
// BITWISE NOR
// LEFT SHIFT
//RIGHT SHIFT


// BITWISE AND &

// 0   0    0
// 1   0    0
// 1   1    1
// 0   1    0 


// IF BOTH CONDITION WILL BE TRUE THEN IT  return true otherwise return false



//  bitwise or |

// 0   0    0
// 1   0    1
// 1   1    1
// 0   1    1


// if the any one condition is true then it return true else if the both condition is  false the return false


// bitwise not  ~

// 0    1
// 1    0


// it convert the inverse of the integer 0 to 1 and 1 to 0



// Bitwise nor ^

// it works the principle of the both condition is same then it return true else return false 

// 0  0  1
// 1  0  0
// 1  1  1
// 0  1  0

// ex : 

// 5   =>  00000000000000000000000000000101
// 5~  =>  11111111111111111111111111111010 (= -6)


// Left Shift (<<) Operator

// The JavaScript bitwise left shift (<<) operator moves all the bits in its first operand to the left by the number of places specified in the second operand. New bits are filled with zeros from the right and left most bits are discarded.

// Shifting a value left by one position is equivalent to multiplying it by 2, shifting two positions is equivalent to multiplying by 4 

// ex : 

5	00000000000000000000000000000101
5 << 1	00000000000000000000000000001010 (= 10)
5 << 2	00000000000000000000000000010100 (= 20)