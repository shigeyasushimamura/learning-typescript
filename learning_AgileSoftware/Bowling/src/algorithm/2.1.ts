export const TransformDigiToBinary = (input: number): number => {
  let result = "";
  while (input >= 1) {
    // console.log("input", input);
    if (input % 2 == 0) {
      result = "0" + result;
    } else {
      result = "1" + result;
    }
    input = Math.floor(input / 2);
  }

  if (input) {
    result = "1" + result;
  }

  return Number(result);
};

export const TransformDecimalToBinary = (input: number): number => {
  let result = 0;
  let i = 0;

  while (input >= 1) {
    result += 2 ** i * (input % 10);
    i++;

    input = Math.floor(input / 10);
  }

  return result;
};
