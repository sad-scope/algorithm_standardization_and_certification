import { arrayInput, zeroToBegin, multiply } from "./functions";

function main(): void {
  const array = arrayInput();

  multiply(array);

  zeroToBegin(array);
}

main();
