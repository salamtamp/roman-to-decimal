import { convertRomanStringToDecimalNumber } from '../src/roman'

describe('ConvertRomanStringToDecimalNumber', () => {
  it('should return -1 when cannot input string is invalid', () => {
    const inputRomanStringValue = 'A'
    const expectedDecimalValue = -1
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should return -1 when cannot string is empty', () => {
    const inputRomanStringValue = ''
    const expectedDecimalValue = -1
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "I" to number 1 correctly', () => {
    const inputRomanStringValue = 'I'
    const expectedDecimalValue = 1
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "II" to number 2 correctly', () => {
    const inputRomanStringValue = 'II'
    const expectedDecimalValue = 2
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "III" to number 3 correctly', () => {
    const inputRomanStringValue = 'III'
    const expectedDecimalValue = 3
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "IV" to number 4 correctly', () => {
    const inputRomanStringValue = 'IV'
    const expectedDecimalValue = 4
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "V" to number 5 correctly', () => {
    const inputRomanStringValue = 'V'
    const expectedDecimalValue = 5
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "VI" to number 6 correctly', () => {
    const inputRomanStringValue = 'VI'
    const expectedDecimalValue = 6
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "VII" to number 7 correctly', () => {
    const inputRomanStringValue = 'VII'
    const expectedDecimalValue = 7
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "VIII" to number 8 correctly', () => {
    const inputRomanStringValue = 'VIII'
    const expectedDecimalValue = 8
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "IX" to number 9 correctly', () => {
    const inputRomanStringValue = 'IX'
    const expectedDecimalValue = 9
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "X" to number 10 correctly', () => {
    const inputRomanStringValue = 'X'
    const expectedDecimalValue = 10
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "XI" to number 11 correctly', () => {
    const inputRomanStringValue = 'XI'
    const expectedDecimalValue = 11
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "XIV" to number 14 correctly', () => {
    const inputRomanStringValue = 'XIV'
    const expectedDecimalValue = 14
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "XV" to number 15 correctly', () => {
    const inputRomanStringValue = 'XV'
    const expectedDecimalValue = 15
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "XVI" to number 16 correctly', () => {
    const inputRomanStringValue = 'XVI'
    const expectedDecimalValue = 16
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "L" to number 50 correctly', () => {
    const inputRomanStringValue = 'L'
    const expectedDecimalValue = 50
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "C" to number 100 correctly', () => {
    const inputRomanStringValue = 'C'
    const expectedDecimalValue = 100
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "D" to number 500 correctly', () => {
    const inputRomanStringValue = 'D'
    const expectedDecimalValue = 500
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "M" to number 1000 correctly', () => {
    const inputRomanStringValue = 'M'
    const expectedDecimalValue = 1000
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "MM" to number 2000 correctly', () => {
    const inputRomanStringValue = 'MM'
    const expectedDecimalValue = 2000
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "MMM" to number 3000 correctly', () => {
    const inputRomanStringValue = 'MMM'
    const expectedDecimalValue = 3000
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "MMMCMXCIX" to number 3999 correctly', () => {
    const inputRomanStringValue = 'MMMCMXCIX'
    const expectedDecimalValue = 3999
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "MCMXLIV" to number 1944 correctly', () => {
    const inputRomanStringValue = 'MCMXLIV'
    const expectedDecimalValue = 1944
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })

  it('should convert string "XLII" to number 42 correctly', () => {
    const inputRomanStringValue = 'XLII'
    const expectedDecimalValue = 42
    expect(convertRomanStringToDecimalNumber(inputRomanStringValue)).toBe(expectedDecimalValue)
  })
})