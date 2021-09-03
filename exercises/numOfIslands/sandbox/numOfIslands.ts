
function recursivelyMarkAsSeen(grid, i, j) {
  if (access(grid, i, j) === LAND) {
    grid[i][j] = SEEN;
    markAllNeighbours(grid, i, j);
  }
}

const markAllNeighbours = (grid, i, j) => {
  recursivelyMarkAsSeen(grid, i - 1, j);
  recursivelyMarkAsSeen(grid, i, j - 1);
  recursivelyMarkAsSeen(grid, i + 1, j);
  recursivelyMarkAsSeen(grid, i, j + 1);
};

const markAllNeighboursStack = (grid, i, j) => {
  const stack = [[i, j]];
  while (stack.length > 0) {
    const [_i, _j] = stack.pop();
    if (access(grid, _i, _j) === LAND) {
      grid[_i][_j] = SEEN;
    } else {
      continue;
    }
    safePush(stack, grid, _i - 1, _j);
    safePush(stack, grid, _i + 1, _j);
    safePush(stack, grid, _i, _j + 1);
    safePush(stack, grid, _i, _j - 1);
  }
};

const record = {}
function access(grid, i, j) {
  const key = `${i}_${j}`;
  record[key] = record[key] ? record[key] + 1 : 1;
  return grid[i]?.[j];
}

const safePush = (stack, grid, i, j) => {
  if (access(grid, i, j) === LAND) {
    stack.push([i, j]);
  }
};

const SEEN = -1;
const LAND = 1;

export const numOfIslands = (grid: number[][]) => {
  let num = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (access(grid, i, j) === LAND) {
        num++;
        markAllNeighbours(grid, i, j);
      }
    }
  }
  console.log(record);
  return num;
};
