import { expect, test } from "bun:test";
import { linearSearch } from "./linear-search";

test("linear search", () => {
  const arr = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  const arr2 = ["hello", "hell", "hel", "he", "h"];

  expect(linearSearch(arr, 69)).toEqual(true);
  expect(linearSearch(arr, 1336)).toEqual(false);
  expect(linearSearch(arr, 69420)).toEqual(true);
  expect(linearSearch(arr, 69421)).toEqual(false);
  expect(linearSearch(arr, 1)).toEqual(true);
  expect(linearSearch(arr, 0)).toEqual(false);
  expect(linearSearch(arr2, "1")).toEqual(false);
});
