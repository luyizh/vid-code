function bubbleSort(array) {

  // on each iteration through the unsorted section, 
  // move the largest element to the right end of the unsorted section
  // the right end of the unsorted section now gets added to the sorted section
  // after n iterations through the array, the rightmost n values are sorted
  
  for (let end = array.length - 1; end >= 0; end--) {
    
    for (let i = 0; i < end; i++) {
      // if value at index i is greater than value after it
      if (array[i] > array[i+1]) {
        // swap values at indices i and i+1
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
      }
    }

  }

  return array;
}



// console.log(bubbleSort([1, 2, 3, 4, 5])); // [ 1, 2, 3, 4, 5 ]
// console.log(bubbleSort([5, 4, 3, 2, 1])); // [ 1, 2, 3, 4, 5 ]
// console.log(bubbleSort([5]));             // [ 5 ]
// console.log(bubbleSort([1, 2, 3, 3, 2])); // [ 1, 2, 2, 3, 3 ]
// console.log(bubbleSort([5, 1, 2, 3, 4])); // [ 1, 2, 3, 4, 5 ]



console.log(bubbleSort([20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]









    // let numSwaps = 0;
    //     // if we didn't make any swaps in a given iteration, 
    // // the array is already sorted prior to that iteration
    // if (numSwaps === 0) {
    //   return array;
    // }

