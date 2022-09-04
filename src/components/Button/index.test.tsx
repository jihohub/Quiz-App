/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from ".";

test("버튼이 text 요소를 가지고 있는가?", async () => {
  render(<Button text="pizza" />);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("pizza");
});
