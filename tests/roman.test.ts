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
})