function merge(arr1, arr2) {
  let merged = [];
  // while there are unmerged elements left in both arrays
  while (arr1.length > 0 && arr2.length > 0) {
    // merge
    if (arr1[0] <= arr2[0]) {
      merged.push(arr1[0]);
      arr1.shift();
    } else {
      merged.push(arr2[0]);
      arr2.shift();
    }
    // if one (or both) array is empty, 
    // add rest of other array to master list and stop merging
    if (arr1.length === 0) {
      return merged.concat(arr2);
    }
    if (arr2.length === 0) {
      return merged.concat(arr1);
    }

  }
  return merged;
}

console.log(merge([1], [1]));
console.log(merge([1, 2, 5, 6], [3, 4, 7]));
console.log(merge([1, 2, 3, 4], [5, 6, 7]));
console.log(merge([1, 5], [2, 3, 4]))

function mergeSort(arr) {
  // base case
  if (arr.length === 1 || arr.length === 0) {
    return arr;
  }
  // recursive step
  const midIndex = Math.floor(arr.length/2);
  return merge(mergeSort(arr.slice(0, midIndex)), mergeSort(arr.slice(midIndex)))
}

//console.log([1, 2, 3].slice(0, 1), [1, 2, 3].slice(1, 3))
console.log(mergeSort([1, 5, 2, 3, 4]))
console.log(mergeSort([1, 4, 5, 2, 3, 9]))
console.log(mergeSort([1, 6, 5, 2, 3, 9]))
console.log(mergeSort([7, 6, 5, 4, 3, 2, 1, 0]))
console.log(mergeSort([7]))
console.log(mergeSort([7, 6]))
console.log(mergeSort([]))

