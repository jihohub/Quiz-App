/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChoiceContainer from ".";

test("퀴즈 페이지: 아직 사용자가 선택하지 않은 보기의 background-color가 투명으로 표시되는가?", async () => {
  render(<ChoiceContainer choice="pizza" page="quiz" isSelected={false} />);
  const tab = screen.getByRole("tab");
  expect(tab).toHaveStyle(`background-color: transparent`);
});

test("퀴즈 페이지: 사용자가 정답을 선택했을 시 background-color가 녹색으로 표시되는가?", async () => {
  render(
    <ChoiceContainer
      choice="pizza"
      page="quiz"
      isSelected={true}
      isCorrect={true}
    />
  );
  const tab = screen.getByRole("tab");
  fireEvent(
    tab,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(tab).toHaveStyle(`background-color: #c6f6d5;`);
});

test("퀴즈 페이지: 사용자가 오답을 선택했을 시 background-color가 적색으로 표시되는가?", async () => {
  render(
    <ChoiceContainer
      choice="pizza"
      page="quiz"
      isSelected={true}
      isCorrect={false}
    />
  );
  const tab = screen.getByRole("tab");
  fireEvent(
    tab,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(tab).toHaveStyle(`background-color: #fc8383;`);
});

test("결과 페이지: 정답인 보기의 background-color가 녹색으로 표시되는가?", async () => {
  render(<ChoiceContainer choice="pizza" page="result" isCorrect={true} />);
  const tab = screen.getByRole("tab");
  fireEvent(
    tab,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(tab).toHaveStyle(`background-color: #c6f6d5;`);
});

test("결과 페이지: 사용자가 선택한 보기가 오답일 시 해당 보기의 background-color가 적색으로 표시되는가?", async () => {
  render(<ChoiceContainer choice="pizza" page="result" isWrong={true} />);
  const tab = screen.getByRole("tab");
  fireEvent(
    tab,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(tab).toHaveStyle(`background-color: #feb4b4;`);
});

test("결과 페이지: 사용자가 선택하지 않은 보기의 background-color가 투명으로 표시되는가?", async () => {
  render(<ChoiceContainer choice="pizza" page="result" isNothing={true} />);
  const tab = screen.getByRole("tab");
  fireEvent(
    tab,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(tab).toHaveStyle(`background-color: transparent;`);
});
