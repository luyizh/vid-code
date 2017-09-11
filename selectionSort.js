function selSort(array) {
  // iterate through every element in unsorted section
  for (let start = 0; start < array.length; start++) {
    let min = array[start];
    let minIndex = start;
    // find minimum and minimum index in unsorted section
    for (let i = start + 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
        minIndex = i;
      }
    }
    // swap leftmost unsorted element with smallest element in unsorted section
    array[minIndex] = array[start];
    array[start] = min;  
    // after this swap, the leftmost element in unsorted section now becomes sorted
  }
  return array;
}

console.log(selSort([5, 4, 6, 2, 1, 3]));
console.log(selSort([5, 4, 1, 2, 3]));
console.log(selSort([1, 2, 3, 4, 5]));
console.log(selSort([5]));
console.log(selSort([1, 2, 3, 2, 3]));