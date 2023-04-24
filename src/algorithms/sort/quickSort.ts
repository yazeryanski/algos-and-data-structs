const quickSort = <T = any>(array: T[]) => {
  // Base Case
  if (array.length < 2) return array;

  const pivot = array[0];
  const { greatherThanPivot, lessThanPivot } =
    getGreatherAndLessThanPivotArrays<T>(array, pivot);

  return [...quickSort(lessThanPivot), pivot, ...quickSort(greatherThanPivot)]
};

const getGreatherAndLessThanPivotArrays = <T = any>(array: T[], pivot: T) => {
  const greatherThanPivot: T[] = [];
  const lessThanPivot: T[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    if (item > pivot) greatherThanPivot.push(item);
    else if (item < pivot) lessThanPivot.push(item);
  }

  return { greatherThanPivot, lessThanPivot };
};

export default quickSort;
