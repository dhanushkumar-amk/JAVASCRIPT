// break	The 'break' keyword is used to come out of the loop.

// continue	The 'continue' keyword is used to skip the current iteration of the loop.

// label	The 'label' is not a keyword, but you can use any identifier followed by a colon (:) to give a label to the loop. After that, you can use the label to target the particular loop with the break and continue keyword.

// Break statement

var x = 2;
while (x < 20) {
  if (x == 5) {
    break; // breaks out of loop completely
  }
  x++;
  console.log(x);
}
