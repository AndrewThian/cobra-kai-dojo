const dictionary = [
  'cat', 'cot', 'cog', 'dog', 'fog', 'cow', 'low', 'lot', 'jag', 'hag', 'hat',
  'lead', 'load', 'goad', 'gold', 'ruby', 'rubs', 'robs', 'rods', 'rode', 'code'
]

function isOneLetterDiff(wordOne, wordTwo) {
  if (wordOne.length !== wordTwo.length) return false;

  let count = 0;  
  for (let i = 0; i < wordOne.length; i++) {
    if (wordTwo[i] === wordOne[i]) count++
  }
  
  return (wordOne.length - count) === 1;
}

// function recurse(current, last, dictionary) {
//   const wordsWithOneLetterDiff = ['sat', 'cot', 'hat'];
//   const results = wordsWithOneLetterDiff.map((word) => recurse(word, last, dictionaryMinusCurrent))
//   const shortestResult = ...
//   return [current, ...shortestResult];
// }

export const wordChain = (first: string, last: string) => {
  const result = []

  result.push(first)

  // let current = first;
  // let previous = current;

  // while(true) {

  //   for (let i = 0; i < dictionary.length; i++) {
  //     const word = dictionary[i]

  //     if (!result.includes(word) && isOneLetterDiff(current, word)) {
  //       previous = current;
  //       current = word;
  //       result.push(current)
  //       break;
  //     }
  //   }

  //   if (current === last) break;
  //   if (previous === current) break;
  // }

  
  // dictionary.forEach(word => {
  //   if (isOneLetterDiff(current, word)) {
  //     current = word;
  //     result.push(current)
  //   }
  // })

  let current = first;
  let previous = current;
  while (true) {
    for (let i = 0; i < current.length; i++) {
      const charCurrent = current[i];
      const charLast = last[i];
      const newWord = current.split('');
      newWord[i] = charLast;
      const newString = newWord.join('');
      if (newString !== current && dictionary.includes(newString)) { 
        previous = current;
        current = newString;
        result.push(current);
        break;
      }
    }

    if (current === last) break;
    if (previous === current) break;
  }

  return result
}

