function countMultsOf3Or4(n) {
  // returns number of multiples of 3, 4, or both 
  // between 1 to n inclusive
  
  // initiate count variable to 0

  // iterate through every number from 1 to n
  // check if it is a multiple of 3 or a multiple of 4
    // if it is, increment count

  // return count

  let count = 0;

  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 || i % 4 === 0) {
      count++;
    }
  }

  return count;
}

console.log(countMultsOf3Or4(1))        // 0
console.log(countMultsOf3Or4(6))        // 3
console.log(countMultsOf3Or4(12))       // 6


console.log(countMultsOf3Or4(12000000)) // 6000000










// console.log(countMultsOf3Or4(12))
// // 1 2 3 4 5 6 7 8 9 10 11 12
// // 3 4 6 8 9 12 => 6



// // input: a positive integer
// // output: a nonnegative integer