import {countBySlopesAndMultiply, run} from "./solution";

describe("03/12 puzzle 2", () => {
  it('use the sample input', () => {
    const input = [
      "..##.......",
      '#...#...#..',
      '.#....#..#.',
      '..#.#...#.#',
      '.#...##..#.',
      '..#.##.....',
      '.#.#.#....#',
      '.#........#',
      '#.##...#...',
      '#...##....#',
      '.#..#...#.#', 
    ];
    const result = 336;

    expect(countBySlopesAndMultiply(input)).toEqual(result);
  });

  it('run with the real input', async () => {
    const result = await run();
    console.log('the solution is: ', result);
  });
});
