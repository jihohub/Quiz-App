/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProgressBar from ".";

test("1번째 문제를 풀고 있을 경우 ProgressBar의 width가 10%인가?", async () => {
  render(<ProgressBar step={0} />);
  const progressbar = screen.getByRole("progressbar");
  expect(progressbar).toHaveStyle(`width: 10%`);
});

test("6번째 문제를 풀고 있을 경우 ProgressBar의 width가 60%인가?", async () => {
  render(<ProgressBar step={5} />);
  const progressbar = screen.getByRole("progressbar");
  expect(progressbar).toHaveStyle(`width: 60%`);
});

test("9번째 문제를 풀고 있을 경우 ProgressBar의 width가 90%인가?", async () => {
  render(<ProgressBar step={8} />);
  const progressbar = screen.getByRole("progressbar");
  expect(progressbar).toHaveStyle(`width: 90%`);
});

test("10번째 문제를 풀고 있을 경우 ProgressBar의 width가 100%인가?", async () => {
  render(<ProgressBar step={9} />);
  const progressbar = screen.getByRole("progressbar");
  expect(progressbar).toHaveStyle(`width: 100%`);
});
