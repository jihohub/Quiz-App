
/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuestionBox from "./QuestionBox";

test("QuestionBox 컴포넌트가 문제를 잘 보여주는지", async () => {
  const question = "Which one is the biggest number?";
  const renderQuestionBox = render(
    <QuestionBox
      question={question}
    />
  );

  const { container } = renderQuestionBox;
  expect(container).toHaveTextContent(question);
});
