import { zeroToBegin, multiply } from "./functions";
import { checkCorrectInput } from "./helpers";

const initialInputValues = {
  first: "1, 2, 3, 4, 5, 6",
  second: "1, 0, 3, 6, 8, 0, 7",
  third: "10, 2, 4, 1, 0",
  fourth: "1, 3",
  fifth: "-1, 4, 0, -10, -3, 2, 16, 0",
  errorFirst: "",
  errorSecond: "1",
  errorThird: "1, number",
};

const checkedResults = {
  first: true,
  second: true,
  third: true,
  fourth: true,
  fifth: true,
  errorFirst: false,
  errorSecond: false,
  errorThird: false,
};

const initialArraysMocks = {
  first: [1, 2, 3, 4, 5, 6],
  second: [1, 0, 3, 6, 8, 0, 7],
  third: [10, 2, 4, 1, 0],
  fourth: [1, 3],
  fifth: [-1, 4, 0, -10, -3, 2, 16, 0],
};

const sortedArraysMocks = {
  first: [1, 2, 3, 4, 5, 6],
  second: [0, 0, 1, 3, 6, 8, 7],
  third: [0, 10, 2, 4, 1],
  fourth: [1, 3],
  fifth: [0, 0, -1, 4, -10, -3, 2, 16],
};

const productsMocks = {
  first: 120,
  second: 18,
  third: 8,
  fourth: 0,
  fifth: -6,
};

test("checkCorrectInput function", () => {
  expect(checkCorrectInput(initialInputValues.first)).toBe(
    checkedResults.first
  );
  expect(checkCorrectInput(initialInputValues.second)).toBe(
    checkedResults.second
  );
  expect(checkCorrectInput(initialInputValues.third)).toBe(
    checkedResults.third
  );
  expect(checkCorrectInput(initialInputValues.fourth)).toBe(
    checkedResults.fourth
  );
  expect(checkCorrectInput(initialInputValues.fifth)).toBe(
    checkedResults.fifth
  );
  expect(checkCorrectInput(initialInputValues.errorFirst)).toBe(
    checkedResults.errorFirst
  );
  expect(checkCorrectInput(initialInputValues.errorSecond)).toBe(
    checkedResults.errorSecond
  );
  expect(checkCorrectInput(initialInputValues.errorThird)).toBe(
    checkedResults.errorThird
  );
});

test("multiply function", () => {
  expect(multiply(initialArraysMocks.first)).toBe(productsMocks.first);
  expect(multiply(initialArraysMocks.second)).toBe(productsMocks.second);
  expect(multiply(initialArraysMocks.third)).toBe(productsMocks.third);
  expect(multiply(initialArraysMocks.fourth)).toBe(productsMocks.fourth);
  expect(multiply(initialArraysMocks.fifth)).toBe(productsMocks.fifth);
});

test("zeroToBegin function", () => {
  expect(zeroToBegin(initialArraysMocks.first)).toStrictEqual(
    sortedArraysMocks.first
  );
  expect(zeroToBegin(initialArraysMocks.second)).toStrictEqual(
    sortedArraysMocks.second
  );
  expect(zeroToBegin(initialArraysMocks.third)).toStrictEqual(
    sortedArraysMocks.third
  );
  expect(zeroToBegin(initialArraysMocks.fourth)).toStrictEqual(
    sortedArraysMocks.fourth
  );
  expect(zeroToBegin(initialArraysMocks.fifth)).toStrictEqual(
    sortedArraysMocks.fifth
  );
});
