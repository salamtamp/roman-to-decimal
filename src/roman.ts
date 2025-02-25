export function convertRomanStringToDecimalNumber(roman: string): number {
  let decimalNumber: number = -1

  if (roman === 'I') {
    decimalNumber = 1
  } else if (roman === 'II') {
    decimalNumber = 2
  } else if (roman === 'III') {
    decimalNumber = 3
  }

  return decimalNumber
}