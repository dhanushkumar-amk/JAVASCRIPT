// break	The 'break' keyword is used to come out of the loop.// continue	The 'continue' keyword is used to skip the current iteration of the loop.

// label	The 'label' is not a keyword, but you can use any identifier followed by a colon (:) to give a label to the loop. After that, you can use the label to target the particular loop with the break and continue keyword.

// Break statement

// break statement issued to break the condition if the condition meets the certain block

var x = 0;
while (x < 20) {
  if (x == 5) {
    break; // breaks out of loop completely
  }
  x++;
  console.log(x);
}

// Continue statement

// the continue statement is used to skip that the iteration is comes true

var y = 0;
while (y < 10) {
  y++;
  if (y == 5) {
    continue; // skip this condition
  }

  console.log(y);
}

// 1
// 2
// 3
// 4  it skip 5 then go 6
// 6
// 7
// 8
// 9
// 10

