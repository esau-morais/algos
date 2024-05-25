// O(sqrt(n))
export const twoCrystalBalls = (breaks: boolean[]) => {
  const jump = Math.floor(Math.sqrt(breaks.length));

  let i = jump;
  for (; i < breaks.length; i += jump) {
    if (breaks[i]) break;
  }

  i -= jump;

  for (let j = i; j < breaks.length; ++j) {
    if (breaks[j]) return j;
  }

  return -1;
};
