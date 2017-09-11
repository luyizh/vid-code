function insertionSort(arr) {
  // look at every value starting from the second one in the array
  for (let index = 1; index < arr.length; index++) {
    let toBeInserted = arr[index];

    // compare value to each slot left of it 
    // and insert it at correct position
    let compareIndex = index - 1;  
    while (toBeInserted < arr[compareIndex] && compareIndex >= 0) {
      // swap arr[compareIndex] and arr[compareIndex+1] 
      // if the two are out of order
      let temp = arr[compareIndex+1];
      arr[compareIndex+1] = arr[compareIndex];
      arr[compareIndex] = temp;
      
      compareIndex--;
    }
  }
  return arr;
}

console.log(insertionSort([4, 3, 2, 1]))
console.log(insertionSort([4]))
console.log(insertionSort([5, 6, 7, 4, 3, 2, 1]))
