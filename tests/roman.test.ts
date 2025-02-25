import { convertRomanStringToDecimalNumber } from '../src/roman'

describe('ConvertRomanStringToDecimalNumber', () => {
  it('should return -1 when cannot convert string', () => {
    const inputRomanStringValue = 'A'
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
})