# Roman Numeral Converter

A TypeScript utility that converts Roman numerals to decimal numbers.

## Features

- Converts Roman numerals (I, V, X, L, C, D, M) to decimal numbers
- Input validation for invalid Roman numerals
- Returns -1 for invalid inputs

## Examples

```typescript
const decimalNumber = convertRomanStringToDecimalNumber("XLII");
console.log(decimalNumber); // 42
```

```typescript
const decimalNumber = convertRomanStringToDecimalNumber("MCMXLIV");
console.log(decimalNumber); // 1944
```

```typescript
const decimalNumber = convertRomanStringToDecimalNumber("A");
console.log(decimalNumber); // -1
```

```typescript
const decimalNumber = convertRomanStringToDecimalNumber("");
console.log(decimalNumber); // -1
```

```typescript
const decimalNumber = convertRomanStringToDecimalNumber("MMMCMXCIX");
console.log(decimalNumber); // 3999
```

## How to Test

1. Clone the repository

```bash
git clone https://github.com/salamtamp/roman-numeral-converter.git
```

2. Install dependencies

```bash
npm install
```

3. Run tests

```bash
npm test
```

## Author

[Patchara Suwanwanakul](https://github.com/salamtamp)
