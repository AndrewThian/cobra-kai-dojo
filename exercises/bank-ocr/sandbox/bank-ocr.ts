const numbers = [
  //
  " _ " +
  "| |" +
  "|_|",
  //
  "   " +
  "  |" +
  "  |",
  //
  " _ " +
  " _|" +
  "|_ ",
  //
  " _ " +
  " _|" +
  " _|",
  //
  "   " +
  "|_|" +
  "  |",
  //
  " _ " +
  "|_ " +
  " _|"
]

export const bankOCR = (str) => {
  const count = str.length / 9;
  const spanOfCharactersInARow = 3;

  const line = count * spanOfCharactersInARow

  const firstRow = str.slice(0, line);
  const secondRow = str.slice(line, line * 2);
  const thirdRow = str.slice(line * 2, line * 3);

  const arr = [];
  [firstRow, secondRow, thirdRow].forEach((row) => {
    for (let i = 0; i < count; i++) {
      const rowArr = row.slice(i * spanOfCharactersInARow, (i + 1) * spanOfCharactersInARow)
      arr[i] = arr[i] ? arr[i].concat(rowArr) : rowArr;
    }
  });
  const r = arr.map((str) => {
    const v = numbers.indexOf(str)
    if (v === -1) return '?'
    return v;
  })

  if (r.join('').includes('?')) {
    return r.join('') + ' ILL'
  }

  if (count === 9 && !calcCheckSum(r)) {
    return r.join('') + ' ERR'
  }
  return r.join('')

}


function calcCheckSum(_arr) {
    const arr = _arr.slice();
    arr.reverse();
    const checkSum = arr.map((num, idx) => num * (idx + 1)).reduce((sum, num) => sum + num);
    return checkSum % 11 === 0;
}