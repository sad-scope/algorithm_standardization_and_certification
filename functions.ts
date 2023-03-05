import * as colors from "@colors/colors/safe";
import { MINIMUM_ARRAY_LENGTH, NO_ELEMENTS_BETWEEN } from "./constants";
import * as promptSync from "prompt-sync";
import { checkCorrectInput, separateValue } from "./helpers";

export function arrayInput(): number[] {
  const inputValue = promptSync()(
    colors.green("Введите элементы массива через запятую: ")
  );

  if (checkCorrectInput(inputValue)) {
    // Передавая данный массив с приведением строк к числам, мы уверены в том, что
    // в результате преобразования будет возвращен массив чисел
    // так как предварительно мы сделали проверку в функции checkCorrectInput

    const separatedValue = separateValue(inputValue).map((value) =>
      Number(value)
    );

    console.log(colors.blue(`Исходный массив: ${separatedValue}`));

    return separatedValue;
  }

  // В случае введения не чисел или же если количество чисел меньше 2 выводим ошибку
  // и даем пользователю возможность ввести массив еще раз.

  console.log(
    colors.red("Ошибка: вы должны ввести не менее двух чисел через запятую")
  );

  return arrayInput();
}

export function multiply(numbersArray: number[]): number {
  // Если присутстуют 2 элемента сообщаем, что отсутствуют
  // элементы между ними и соответственно произведение равно 0
  if (numbersArray.length === MINIMUM_ARRAY_LENGTH) {
    console.log(NO_ELEMENTS_BETWEEN);

    return 0;
  }

  let minIndex = 0;
  let maxIndex = 0;
  let minValue = null;
  let maxValue = null;

  for (let i = 0; i < numbersArray.length; i++) {
    if (
      numbersArray[i] < numbersArray[minIndex] &&
      numbersArray[i] !== minValue
    ) {
      minIndex = i;
      minValue = numbersArray[i];
    }
    if (
      numbersArray[i] > numbersArray[maxIndex] &&
      numbersArray[i] !== maxValue
    ) {
      maxIndex = i;
      maxValue = numbersArray[i];
    }
  }

  // Если отсутствуют элементы между минимальным и максимальным элементами сообщаем, что отсутствуют
  // элементы между ними и соответственно произведение равно 0

  if (maxIndex - minIndex === 1 || maxIndex - minIndex === -1) {
    console.log(NO_ELEMENTS_BETWEEN);

    return 0;
  }

  let product = 1;

  if (minIndex < maxIndex) {
    for (let i = minIndex + 1; i < maxIndex; i++) {
      product *= numbersArray[i];
    }
  } else {
    for (let i = maxIndex + 1; i < minIndex; i++) {
      product *= numbersArray[i];
    }
  }

  console.log(
    colors.cyan(
      `Произведение элементов массива, расположенных между максимальным и минимальным элементами:  ${product}`
    )
  );

  return product;
}

export function zeroToBegin(numbersArray: number[]): number[] {
  let count = numbersArray.length - 1;

  for (let i = count; i >= 0; i--) {
    if (numbersArray[i] !== 0) {
      [numbersArray[count], numbersArray[i]] = [
        numbersArray[i],
        numbersArray[count],
      ];

      count--;
    }
  }

  console.log(colors.cyan(`Преобразованный массив: ${numbersArray}`));

  return numbersArray;
}
