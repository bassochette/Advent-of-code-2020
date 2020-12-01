import { promises as fs } from 'fs';

export const multiplyAThreeNumberwithASumOf2020 = (input: number[]): number => {
  let A: number;
  let B: number;
  let C: number;

  for (const i of input) {
    const sumOfTheTwoOthers = 2020 - i;
    const currifiedInput = input.filter(x => x !== i);
    for(const j of currifiedInput) {
      const rest = sumOfTheTwoOthers - j;
      if (currifiedInput.includes(rest)) {
        A = i;
        B = j;
        C = rest;
      }
      if (A && B && C) break;
    }
    if (A && B && C) break;
  }
  return A * B * C;
}

export const run = async (): Promise<number> => {
  const inputFile = await fs.readFile(`${__dirname}/input`, 'utf-8');
  const input = inputFile.split('\n').map(x => parseInt(x));
  return multiplyAThreeNumberwithASumOf2020(input);
};

