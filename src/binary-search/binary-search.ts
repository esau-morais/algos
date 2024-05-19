// O(log n)
export const binarySearch = <T>(arr: T[], v: T) => {
  let min = 0;
  let max = arr.length;

  while (min < max) {
    let mid = Math.floor(min + (max - min) / 2);
    let x = arr[mid];

    if (x === v) return true;
    else if (x > v) max = mid;
    else min = mid + 1;
  }

  return false;
};
