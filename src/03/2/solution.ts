import { promises as fs } from 'fs';

const TREE = '#';

const treeBySlope = (input: string[], vx: number, vy: number): number => {
  const slopeHeight = input.length;
  const sampleWidth = input[0].length;

  let trees = 0;

  let y = 0;
  for (let x = 0; x < slopeHeight; x +=vx) {
    const elementAtPosition = input[x][y % sampleWidth];
    if (elementAtPosition === TREE) trees++;

    y += vy;
  }

  return trees;
}

export const countBySlopesAndMultiply = (input: string[]): number => {
  const x1y1 = treeBySlope(input, 1, 1);
  const x1y3 = treeBySlope(input, 1, 3);
  const x1y5 = treeBySlope(input, 1, 5);
  const x1y7 = treeBySlope(input, 1, 7);
  const x2y1 = treeBySlope(input, 2, 1);

  return x1y1 * x1y3 * x1y5 * x1y7 * x2y1;
}

export const run = async (): Promise<number> => {
  const inputFile = await fs.readFile(`${__dirname}/input`, 'utf-8');
  const input = inputFile.split('\n');
  return countBySlopesAndMultiply(input);
};

