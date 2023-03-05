import { zeroToBegin, multiply } from "./functions";

const initialArraysMocks = {
  first: [1, 2, 3, 4, 5, 6],
  second: [1, 0, 3, 6, 8, 0, 7],
  third: [10, 2, 4, 1, 0],
  fourth: [1, 3],
};

const sortedArraysMocks = {
  first: [1, 2, 3, 4, 5, 6],
  second: [0, 0, 1, 3, 6, 8, 7],
  third: [0, 10, 2, 4, 1],
  fourth: [1, 3],
};

const productsMocks = {
  first: 120,
  second: 18,
  third: 8,
  fourth: 0,
};

test("multiply", () => {
  expect(multiply(initialArraysMocks.first)).toBe(productsMocks.first);
  expect(multiply(initialArraysMocks.second)).toBe(productsMocks.second);
  expect(multiply(initialArraysMocks.third)).toBe(productsMocks.third);
  expect(multiply(initialArraysMocks.fourth)).toBe(productsMocks.fourth);
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
});
