import * as colors from "@colors/colors/safe";
import { arrayInput, zeroToBegin, multiply } from "./functions";

function main(): void {
  console.log(
    colors.magenta("Добро пожаловать в программу для работы с массивом чисел!")
  );

  const array = arrayInput();

  multiply(array);

  zeroToBegin(array);

  console.log(colors.magenta("Спасибо за использование программы!"));
}

main();
