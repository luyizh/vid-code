function generateNextRow(lastRow) {
  let nextRow = [];
  
  // first element
  nextRow.push(1);

  // each element in between is 
  // the sum of two elements in the previous row
  for (let i = 0; i < lastRow.length - 1; i++) {
    nextRow.push(lastRow[i] + lastRow[i+1]);
  }

  // last element
  nextRow.push(1);

  return nextRow; 
}

function pascal(n) {
  // base case
  if (n === 0) {
    return [1];
  }
  
  // recursive step
  return generateNextRow(pascal(n-1));
}

// console.log(generateNextRow([1, 3, 3, 1])); // [1, 4, 6, 4, 1]
// console.log(generateNextRow([1]));          // [1, 1]

console.log(pascal(0)); // [1]
console.log(pascal(1)); // [1, 1]
console.log(pascal(4)); // [1, 4, 6, 4, 1]
console.log(pascal(10)) // [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1]