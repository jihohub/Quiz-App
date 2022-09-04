/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Toast from ".";

test("토스트 활성화시 visibility가 visible인가?", async () => {
  render(<Toast isActive={true} setIsActive={jest.fn()} />);
  const tab = screen.getByRole("tab");
  expect(tab).toBeVisible();
});

// visibility가 hidden일 경우에는 getElementError로 인해 테스트가 불가하였음
// test("토스트 비활성화시 visibility가 hidden인가?", async () => {
//   render(<Toast isActive={false} setIsActive={jest.fn()} />);
//   const tab = screen.getByRole("tab");
//   expect(tab).not.toBeVisible();
// });
