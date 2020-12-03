import { promises as fs } from 'fs';

export const solution = (input: string[]): any => {

}

export const run = async (): Promise<number> => {
  const inputFile = await fs.readFile(`${__dirname}/input`, 'utf-8');
  const input = inputFile.split('\n');
  return solution(input);
};

