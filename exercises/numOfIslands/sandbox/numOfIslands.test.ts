import { numOfIslands } from "./numOfIslands";

it("numOfIslands", () => {
  const grid = [[1, 0]];

  expect(numOfIslands(grid)).toEqual(1);
});

it("numOfIslands", () => {
  const grid = [
    [1, 0],
    [1, 0],
  ];

  expect(numOfIslands(grid)).toEqual(1);
});

it("numOfIslands", () => {
  const grid = [
    [1, 1, 1, 0, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  expect(numOfIslands(grid)).toEqual(1);
});

it("numOfIslands", () => {
  const grid = [
    [1, 1, 1],
    [0, 1, 0],
    [1, 1, 1],
  ];

  expect(numOfIslands(grid)).toEqual(1);
});

it("numOfIslands", () => {
  const grid = [
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
  ];

  expect(numOfIslands(grid)).toEqual(1);
});
