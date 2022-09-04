import convertDiff from "./convertDiff";

test("86400000 밀리세컨드는 1일", () => {
  expect(convertDiff(86400000)).toStrictEqual("1일 소요되었습니다.");
});

test("86401000 밀리세컨드는 1일 초", () => {
  expect(convertDiff(86401000)).toStrictEqual("1일 1초 소요되었습니다.");
});

test("61000 밀리세컨드는 1분 1초", () => {
  expect(convertDiff(61000)).toStrictEqual("1분 1초 소요되었습니다.");
});

test("3600000 밀리세컨드는 1시간", () => {
  expect(convertDiff(3600000)).toStrictEqual("1시간 소요되었습니다.");
});

test("3660000 밀리세컨드는 1시간 1분", () => {
  expect(convertDiff(3660000)).toStrictEqual("1시간 1분 소요되었습니다.");
});

export {};
