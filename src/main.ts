import algorithms from "./algorithms/algorithms";

const array = [2, 312, 33, 21, 3, 5, 9];

// Quick Sort
const sortedArray = algorithms.quickSort<number>(array)
console.log('Quick Sort:', sortedArray);

// BinarySearch
const searchingIndex = algorithms.binarySearchIndex(sortedArray, 33);
console.log('Binary Search for 33, the index is: ', searchingIndex);


