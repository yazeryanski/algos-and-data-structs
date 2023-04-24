const binarySearchIndex = <T>(
  array: T[],
  search: T,
  prevStart = 0,
  prevEnd = array.length
): number => {
  // Invalid Case
  if (array.length <= 0) return -1;
  
  // Base Case
  const pivotIndex = getPivot(prevStart, prevEnd);
  const pivot = array[pivotIndex];
  if (pivot === search) return pivotIndex;

  const start = pivot > search ? prevStart : pivotIndex;
  const end = pivot > search ? pivotIndex : prevEnd;

  return binarySearchIndex(array, search, start, end)
};

const getPivot = (start: number, end: number) => {
  const length = end - start;
  if (length <= 1) return 1;
  const pivot =  Math.ceil(length / 2);

  return start + pivot;
};

export default binarySearchIndex;
