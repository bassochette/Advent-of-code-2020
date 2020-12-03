import { promises as fs } from 'fs';

const TREE = '#';

export const countTreesInTheFace = (input: string[]): number => {

  const slopeHeight = input.length;
  const sampleWidth = input[0].length;

  let trees = 0;

  let y = 0;
  for (let x = 0; x < slopeHeight; x++) {
    const elementAtPosition = input[x][y % sampleWidth];
    if (elementAtPosition === TREE) trees++;
    
    y += 3;
  }

  return trees;
}

export const run = async (): Promise<number> => {
  const inputFile = await fs.readFile(`${__dirname}/input`, 'utf-8');
  const input = inputFile.split('\n');
  return countTreesInTheFace(input);
};

