import {multiplyAThreeNumberwithASumOf2020, run} from "./solution";

describe("01/12 puzzle 2", () => {
  it('use the sample input', () => {
    const input = [
      1721,
      979,
      366,
      299,
      675,
      1456, 
    ];
    const result = 241861950;

    expect(multiplyAThreeNumberwithASumOf2020(input)).toEqual(result);
  });

  it('run with the real input', async () => {
    const result = await run();
    console.log('the solution is: ', result);
  });
});
