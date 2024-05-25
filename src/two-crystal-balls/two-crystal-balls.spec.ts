import { expect, test } from "bun:test";
import { twoCrystalBalls } from "./two-crystal-balls";

test("two crystal balls", () => {
  let randomIdx = Math.floor(Math.random() * 10_000);
  const data = new Array(10_000).fill(false);

  for (let i = randomIdx; i < 10_000; ++i) {
    data[i] = true;
  }

  expect(twoCrystalBalls(data)).toEqual(randomIdx);
  expect(twoCrystalBalls(new Array(821).fill(false))).toEqual(-1);
});
