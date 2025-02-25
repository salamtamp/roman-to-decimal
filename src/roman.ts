

export function convertRomanStringToDecimalNumber(roman: string): number {
  const keyMapping: Record<string, number> = { "I": 1, "V": 5 };
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

  if (roman === "IV") {
    decimalNumber = 4
  } else {
    const chars = roman.split("")

    for (const c of chars) {
      if (c == "I") {
        decimalNumber += keyMapping["I"]
      } else if (c == "V") {
        decimalNumber += keyMapping["V"]
      }
    }
  }



  return decimalNumber
}