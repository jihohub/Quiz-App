/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuizBox from "./QuizBox";

test("loads and displays greeting", async () => {
  const question = "Which one is the biggest number?";
  const choices = [5, 300, 20, 88];
  const answer = 88;
  const indexAnswer = 3
  const renderQuizPanel = render(
    <QuizBox
      question={question}
      choices={choices}
      answer={answer}
      indexAnswer={indexAnswer}
    />
  );

  const { container } = renderQuizPanel;
  expect(container).toHaveTextContent(question);
  expect(container).toHaveTextContent("5");
  expect(container).toHaveTextContent("300");
  expect(container).toHaveTextContent("20");
  expect(container).toHaveTextContent("63");
});
