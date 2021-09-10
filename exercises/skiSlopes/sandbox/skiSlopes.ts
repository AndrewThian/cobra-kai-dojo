/**
 *
 * @param map
 * @param i
 * @param j
 *
 * @returns [3,2,1]
 */
// traverse(map, 1, 2)
function traverse(map, i, j): number[] {
  if (Array.isArray(map[i][j])) return map[i][j];
  const currentElevation = map[i][j];

  let best = [];
  best = getPath(map, i - 1, j, currentElevation, best);
  best = getPath(map, i + 1, j, currentElevation, best);
  best = getPath(map, i, j - 1, currentElevation, best);
  best = getPath(map, i, j + 1, currentElevation, best);[1,2,3,4,6]

  if (best.length === 0) {
    return [currentElevation];
  }
  map[i][j] = [currentElevation, ...best];
  return [currentElevation, ...best];
}

function getPath(map, i, j, currentElevation, best): number[] {
  if (map[i]?.[j] !== undefined) {
    const path = (() => {
      if (Array.isArray(map[i][j])) {
        if (currentElevation > map[i][j][0]) return map[i][j];
        return best;
      }
      if (currentElevation > map[i][j]) {
        return traverse(map, i, j);
      }
      return [];
    })();
    return compare(best, path);
  }
  return best;
}

function compare(previousBest: number[], currentPath: number[]): number[] {
  if (previousBest.length > currentPath.length) return previousBest;
  if (currentPath.length > previousBest.length) return currentPath;

  const previousElevationDiff =
    previousBest[0] - previousBest[previousBest.length - 1];
  const currentElevationDiff =
    currentPath[0] - currentPath[currentPath.length - 1];

  if (previousElevationDiff > currentElevationDiff) {
    return previousBest;
  }

  return currentPath;
}

export const skiSlopes = (map: number[][]) => {
  let best = [];
  let path;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      path = traverse(map, i, j);
      best = compare(best, path);
    }
  }
  return best.join("-");
};
