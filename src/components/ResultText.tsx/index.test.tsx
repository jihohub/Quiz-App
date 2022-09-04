/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultText from ".";

test("정답일 경우, ResultText 컴포넌트에 텍스트가 표기되는가?", async () => {
  render(
    <ResultText
      id={0}
      question="What is the monkey's favorite fruit?"
      choices={["apple", "banana", "grape", "orange"]}
      answer="banana"
      indexAnswer={1}
      indexChosen={1}
    />
  );
  const comment = screen.getByRole("comment");
  expect(comment).toHaveTextContent("정답입니다! 정답은 banana입니다.");
});

test("오답일 경우, ResultText 컴포넌트에 텍스트가 표기되는가?", async () => {
  render(
    <ResultText
      id={0}
      question="What is the monkey's favorite fruit?"
      choices={["apple", "banana", "grape", "orange"]}
      answer="banana"
      indexAnswer={1}
      indexChosen={2}
    />
  );
  const comment = screen.getByRole("comment");
  expect(comment).toHaveTextContent(
    "아쉽게도 grape은 답이 아닙니다. 정답은 banana입니다."
  );
});
