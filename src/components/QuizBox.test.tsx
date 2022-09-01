/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuizBox from "./QuizBox";

test("loads and displays greeting", async () => {
  const question = "Which one is the biggest number?";
  const incorrect = [5, 300, 20];
  const correct = 88;
  const renderQuizPanel = render(
    <QuizBox
      question={question}
      correct_answer={correct}
      incorrect_answers={incorrect}
    />
  );

  const { container } = renderQuizPanel;
  expect(container).toHaveTextContent(question);
  expect(container).toHaveTextContent("5");
  expect(container).toHaveTextContent("300");
  expect(container).toHaveTextContent("20");
  expect(container).toHaveTextContent("63");
});
