import { bankOCR } from './bank-ocr'

// const one = ``
// one + one
//      _  _  _  _  _  _  _  _  _ 
//      _| _| _| _| _| _| _| _| _|
//     |_ |_ |_ |_ |_ |_ |_ |_ |_ 

// const one =
// `
//   |
//   |
// `

const two =
  " _ " +
  " _|" +
  "|_ "      

const oneTwo =
 "   " + " _ " +
 "  |" + " _|" +
 "  |" + "|_ "    

const one =
 "   " +
 "  |" +
 "  |"  

 const three =
 " _ " +
 " _|" +
 " _|"  

const four =
 "   " +
 "|_|" +
 "  |"   

const x = 
" _  _  _  _  _  _  _  _  _ " +
" _| _| _| _| _| _| _| _| _|" +
" _| _| _| _| _| _| _| _| _|"


describe('use-case: parse', () => {
  it('1', () => {
    expect(bankOCR(one)).toEqual('1')
  })
  
  it('2', () => {
    expect(bankOCR(two)).toEqual('2')
  })
  
  it('3', () => {
    expect(bankOCR(three)).toEqual('3')
  })
  
  
  it('12', () => {
    expect(bankOCR(oneTwo)).toEqual('12')
  })
  
  it('4', () => {
    expect(bankOCR(four)).toEqual('4')
  })
  
  // it ('333333333', () => {
  //   expect(bankOCR(x)).toEqual('333333333')
  // })
})

// 000000051
// const y =
// " _     _  _  _  _  _  _  _ " +
// " _||_||_ |_||_| _||_||_ |_ " +
// " _|  | _||_||_||_ |_||_| _|"

// describe('use-case: checksum', () => {
//   it('should fail checksum', () => {
//     expect(bankOCR(y)).toEqual(`345882865 ERR`);
//   })
// })


// 000000051
// 1 * 1 + 5 * 2
const z =
" _  _  _  _  _  _  _  _  _ " +
" _| _| _| _| _| _| _| _| _|" +
" _| _| _| _| _| _| _| _| _|"

const fiftyOne =
" _  _  _  _  _  _  _  _    " +
"| || || || || || || ||_   |" +
"|_||_||_||_||_||_||_| _|  |"

const illegal =
"___________________________" +
"|_||_ | || || || || ||_   |" +
"|_||_||_||_||_||_||_| _|  |"

describe('use-case: checksum', () => {
  it('should fail checksum', () => {
    expect(bankOCR(z)).toEqual(`333333333 ERR`);
  })
  it('should pass checksum', () => {
    expect(bankOCR(fiftyOne)).toEqual(`000000051`);
  })
  it('should fail illegal chars', () => {
    expect(bankOCR(illegal)).toEqual(`????????? ILL`);
  })
})

//3 * 1 + 3*2 + ... 3 *9 = 3 * (1 + 2+ 3+ 9) = 3 * 45