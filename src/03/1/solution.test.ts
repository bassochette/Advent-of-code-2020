import {countTreesInTheFace, run} from "./solution";

describe("03/12 puzzle 1", () => {
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
    const result = 7;

    expect(countTreesInTheFace(input)).toEqual(result);
  });

  it('run with the real input', async () => {
    const result = await run();
    console.log('the solution is: ', result);
  });
});
