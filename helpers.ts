import { MINIMUM_ARRAY_LENGTH } from "./constants";

export function separateValue(value: string): string[] {
  return value.replace(/\s/g, "").split(",");
}

export function checkCorrectInput(inputValue: string): boolean {
  const separatedValue = separateValue(inputValue);

  if (separatedValue.length < MINIMUM_ARRAY_LENGTH) {
    return false;
  }

  return separatedValue.every((value) => {
    const valueAsNumber = Number(value);

    return !isNaN(valueAsNumber);
  });
}
