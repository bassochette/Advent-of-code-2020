import { promises as fs } from 'fs';

export const multiplyATwoNumberwithASumOf2020 = (input: number[]): number => {
  let A: number;
  let B: number;

  for(const num of input) {
    const rest = 2020 - num;
    if (input.includes(rest)) {
      A = num;
      B = rest;
      break;
    }
  }

  return A * B; 
}

export const run = async (): Promise<number> => {
  const inputFile = await fs.readFile(`${__dirname}/input`, 'utf-8');
  const input = inputFile.split('\n').map(x => parseInt(x));
  return multiplyATwoNumberwithASumOf2020(input);
};

