// O(n^2)
export const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i; j < arr.length - 1; ++j) {
      // swap positions
      if (arr[j] >= arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
};
