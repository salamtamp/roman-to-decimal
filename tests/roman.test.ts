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
})