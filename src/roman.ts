

export function convertRomanStringToDecimalNumber(roman: string): number {
  const keyMapping: Record<string, number> = { "I": 1 };
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

  for (const c of chars) {
    if (c == "I") {
      decimalNumber += 1
    }
  }

  return decimalNumber
}