export const getModOneHundred = (...numbers: number[]): number => {
  const total = numbers.reduce((t, n) => t + n, 0);

  return total % 100;
};
