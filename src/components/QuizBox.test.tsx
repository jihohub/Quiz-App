/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuizBox from "./QuizBox";

test("퀴즈 박스가 문제와 보기를 보여주는지", async () => {
  const question = "Which one is the biggest number?";
  const choices = [5, 300, 20, 88];
  const answer = 88;
  const indexAnswer = 3
  const renderQuizBox = render(
    <QuizBox
      question={question}
      choices={choices}
      answer={answer}
      indexAnswer={indexAnswer}
    />
  );

  const { container } = renderQuizBox;
  expect(container).toHaveTextContent(question);
  expect(container).toHaveTextContent("5");
  expect(container).toHaveTextContent("300");
  expect(container).toHaveTextContent("20");
  expect(container).toHaveTextContent("63");
});
