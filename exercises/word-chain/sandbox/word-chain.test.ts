import { wordChain } from './word-chain'

it('word-chain', () => {
  expect(wordChain('cat', 'dog')).toEqual(['cat', 'cot', 'cog', 'dog'])
  expect(wordChain('cat', 'fog')).toEqual(['cat', 'cot', 'cog', 'fog'])
  expect(wordChain('cat', 'cog')).toEqual(['cat', 'cot', 'cog'])
  expect(wordChain('cow', 'lot')).toEqual(['cow', 'low', 'lot'])
  expect(wordChain('jag', 'hat')).toEqual(['jag', 'hag', 'hat'])
  expect(wordChain('lead', 'gold')).toEqual(['lead', 'load', 'goad', 'gold' ])
  // expect(wordChain('ruby', 'code')).toEqual(['ruby', 'rubs', 'robs', 'rods', 'rode', 'code'])
})

// ruby, rubs, robs, rods, rode, code
// ruby, rubs, robs, rods, rode, code

 // cuby roby rody rube


 // ruby -> rubs

 // rubs -> robs