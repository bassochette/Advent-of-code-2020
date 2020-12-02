import { promises as fs } from 'fs';

export const countValidPasswords= (input: string[]): number => {
  let validPasswords = 0;
  for(const i of input) {
    if (!i) continue;
    const [countRule, targetLetterRule, passwd] = i.split(' ');
    const [min, max] = countRule.split('-').map(x => parseInt(x));
    const targetLetter = targetLetterRule.replace(':', '');

    const targetLetterCount = passwd.split('').filter(l => l === targetLetter).length;

    if (targetLetterCount >= min && targetLetterCount <= max) validPasswords++;
  } 
  return validPasswords;
}

export const run = async (): Promise<number> => {
  const inputFile = await fs.readFile(`${__dirname}/input`, 'utf-8');
  const input = inputFile.split('\n');
  return countValidPasswords(input);
};

