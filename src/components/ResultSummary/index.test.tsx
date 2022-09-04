/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultSummary from ".";

test("ResultSummary 컴포넌트에 텍스트가 표기되는가?", async () => {
  render(<ResultSummary text="pizza" />);
  const comment = screen.getByRole("comment");
  expect(comment).toHaveTextContent("pizza");
});
