import { promises as fs } from 'fs';

export const solution = (input: string[]): number => {
  let validPassports = 0;
  for (const passport of input) {
    const flattenPassport = passport.split('\n').join(' ');
    if (
      flattenPassport.includes('byr') &&
      flattenPassport.includes('iyr') &&
      flattenPassport.includes('eyr') &&
      flattenPassport.includes('hgt') &&
      flattenPassport.includes('hcl') &&
      flattenPassport.includes('ecl') &&
      flattenPassport.includes('pid')
    ) {
      validPassports++;
    }
  }
  
  return validPassports;
}

export const run = async (): Promise<number> => {
  const inputFile = await fs.readFile(`${__dirname}/input`, 'utf-8');
  const input = inputFile.split('\n\n');
  return solution(input);
};

