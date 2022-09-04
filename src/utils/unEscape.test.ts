import unEscape from "./unEscape";

test("remove &quot;", () => {
  expect(
    unEscape("In what sport is a &quot;shuttlecock&quot; used?")
  ).toStrictEqual("In what sport is a \"shuttlecock\" used?");
});

test("remove &#039;", () => {
  expect(
    unEscape(
      "Who is often called &quot;the Maestro&quot; in the men&#039;s tennis circuit?"
    )
  ).toStrictEqual(
    "Who is often called \"the Maestro\" in the men\'s tennis circuit?"
  );
});

test("remove &#039;", () => {
  expect(
    unEscape("Who won the 2016 Formula 1 World Driver&#039;s Championship?")
  ).toStrictEqual("Who won the 2016 Formula 1 World Driver's Championship?");
});

export {};
