import { expect, test } from "bun:test";
import { linearSearch } from "./linear-search";

test("linear search", () => {
  const arr = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

  expect(linearSearch(arr, 69)).toBeTrue;
  expect(linearSearch(arr, 1336)).toBeFalse;
  expect(linearSearch(arr, 69420)).toBeTrue;
  expect(linearSearch(arr, 69421)).toBeFalse;
  expect(linearSearch(arr, 1)).toBeTrue;
  expect(linearSearch(arr, 0)).toBeFalse;
});
