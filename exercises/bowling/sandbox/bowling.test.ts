import { deTokenizeSingleFrame, computeScore } from './bowling'

// x  [10]
// 8/ [8,2]
// 8- [8,0]
// 81 [8,1]

const parseTestCases = [
  ["--", [0, 0]],
  ["8/", [8, 2]],
  ["-/", [0, 10]],
  ["x", [10]],
  ["81", [8, 1]],
  ["xxx", [10, 10, 10]],
];

it.each(parseTestCases)('should parse %s to %s', (input: string, output) => {
  expect(deTokenizeSingleFrame(input)).toEqual(output);
})

const computeScoreCases = [
  ['all gutters',  0, ['--','--','--','--','--','--','--','--','--','--']],
  ['some spares', 10, ['-/','--','--','--','--','--','--','--','--','--']],
  ['single strike', 13, ['x','1-','1-','--','--','--','--','--','--','--']],
  ['single strike', 13, ['-/','11','--','--','--','--','--','--','--','--']],
]

it.each(computeScoreCases)('should compute score for %s to %s', (caseName: string, expectedScore, scorecard: string[], ) => {
  expect(computeScore(scorecard)).toEqual(expectedScore);
});


/**
 * [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] => 0
 * [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] => 20
 * [x,5,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] => 24
 * [7,3,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] => 20
 * [x,x,x,x,x,x,x,x,x,x,x,x] => 300
 * [[x],[0,1],[1,2],[2,2]]
 * ['81','9-','x','7/','xxx'] => [[8,1], [9,0], [10], [7,3], [10,10,10]]
 */