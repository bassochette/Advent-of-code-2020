import {countValidPasswords, run} from "./solution";

describe("02/12 puzzle 1", () => {
  it('use the sample input', () => {
    const input = [
      '1-3 a: abcde',
      '1-3 b: cdefg',
      '2-9 c: ccccccccc',
    ];
    const result = 2;

    expect(countValidPasswords(input)).toEqual(result);
  });

  it('run with the real input', async () => {
    const result = await run();
    console.log('the solution is: ', result);
  });
});
