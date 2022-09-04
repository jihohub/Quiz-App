/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProgressText from ".";

test("1번째 문제를 풀고 있을 경우 1 / 10 문제가 표기되는가?", async () => {
  render(<ProgressText step={0} />);
  const comment = screen.getByRole("comment");
  expect(comment).toHaveTextContent("1 / 10 문제");
});

test("6번째 문제를 풀고 있을 경우 6 / 10 문제가 표기되는가?", async () => {
  render(<ProgressText step={5} />);
  const comment = screen.getByRole("comment");
  expect(comment).toHaveTextContent("6 / 10 문제");
});

test("9번째 문제를 풀고 있을 경우 9 / 10 문제가 표기되는가?", async () => {
  render(<ProgressText step={8} />);
  const comment = screen.getByRole("comment");
  expect(comment).toHaveTextContent("9 / 10 문제");
});

test("10번째 문제를 풀고 있을 경우 10 / 10 문제가 표기되는가?", async () => {
  render(<ProgressText step={9} />);
  const comment = screen.getByRole("comment");
  expect(comment).toHaveTextContent("10 / 10 문제");
});
