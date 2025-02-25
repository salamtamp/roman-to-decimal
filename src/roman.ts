

export function convertRomanStringToDecimalNumber(roman: string): number {
  const keyMapping: Record<string, number> = { "I": 1, "V": 5, "X": 10 };
  const errorValue = -1

  const isEmptyString = (str: string) => {
    return str.trim().length === 0
  }

  const isNotValidString = (str: string, whitelists: string[]) => {
    return str.split("").some(c => !whitelists.includes(c))
  }

  if (isEmptyString(roman) || isNotValidString(roman, Object.keys(keyMapping))) {
    return errorValue
  }

  let decimalNumber: number = 0

  const chars = roman.split("")

  for (let i = 0; i < chars.length; i++) {
    const current = keyMapping[chars[i]]
    const next = keyMapping[chars[i + 1]]

    if (current < next) {
      decimalNumber += next - current
      i++
    } else {
      decimalNumber += current
    }
  }

  return decimalNumber
}