import sortChoices from "./sortChoices";

test("add 200 to [1000, 4, 30]", () => {
  expect(sortChoices([1000, 4, 30], 200)).toStrictEqual([
    [4, 30, 200, 1000],
    2,
  ]);
});

test("add two hundred to [1000, 4, 30]", () => {
  expect(sortChoices([1000, 4, 30], "two hundred")).toStrictEqual([
    [4, 30, 1000, "two hundred"],
    3,
  ]);
});

test("add 200 to [1000, four, 30]", () => {
  expect(sortChoices([1000, "four", 30], 200)).toStrictEqual([
    [30, 200, 1000, "four"],
    1,
  ]);
});

test("add two hundred to [1000, four, 30]", () => {
  expect(sortChoices([1000, "four", 30], "two hundred")).toStrictEqual([
    [30, 1000, "four", "two hundred"],
    3,
  ]);
});

test("add 200 to [one thousand, four, thirty]", () => {
  expect(sortChoices(["one thousand", "four", "thirty"], 200)).toStrictEqual([
    [200, "four", "one thousand", "thirty"],
    0,
  ]);
});

export {};
