// O(n)
export const linearSearch = <T>(arr: T[], v: T) => {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === v) return true;
  }

  return false;
};
