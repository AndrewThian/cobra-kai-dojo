import { skiSlopes } from "./skiSlopes";
import fs from 'fs'
import path from 'path'

// ArrayBuffer
const data = fs.readFileSync(__dirname + '/../map.txt', { encoding: 'utf-8' })
const d = data.split('\n').slice(1).map(s => s.split(' ').map((x) => parseInt(x, 10)))

/*
const skiMap: Point[][]

interface Point {
  elevation: number,
  path?: Point[]
}
*/

it("skiSlopes", () => {
  const map = [
    [3, 1],
    [2, 1],
  ];
  expect(skiSlopes(map)).toEqual("3-2-1");
});

it("skiSlopes 2", () => {
  const map = [
    [4, 8, 7, 3],
    [2, 5, 9, 3],
    [6, 3, 2, 5],
    [4, 4, 1, 6],
  ];
  expect(skiSlopes(map)).toEqual("9-5-3-2-1");
});

it("skiSlopes 3", () => {
  const map = [
    [4, 9, 7, 3],
    [2, 5, 8, 3],
    [6, 3, 2, 5],
    [4, 4, 1, 6],
  ];
  expect(skiSlopes(map)).toEqual("9-5-3-2-1");
});

it("skiSlopes BOOM", () => {
  expect(skiSlopes(d)).toEqual("1422-1412-1316-1304-1207-1162-965-945-734-429-332-310-214-143-0")
})
