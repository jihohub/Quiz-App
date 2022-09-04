/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import QuestionContainer from ".";

test("퀴즈 페이지: 질문 영역에 질문 텍스트가 표기되는가?", async () => {
  render(<QuestionContainer id={0}  question="pizza" page="quiz" />);
  const tab = screen.getByRole("tab");
  expect(tab).toHaveTextContent("pizza");
});

test("퀴즈 페이지: 질문 영역의 background-color가 녹색으로 표시되는가?", async () => {
  render(<QuestionContainer id={0} question="pizza" page="quiz" />);
  const tab = screen.getByRole("tab");
  expect(tab).toHaveStyle(`background-color: #c6f6d5`);
});

test("결과 페이지: 질문 영역에 질문 텍스트가 표기되는가??", async () => {
  render(
    <QuestionContainer
      id={0}
      question="pizza"
      page="result"
      isCorrect={true}
    />
  );
  const tab = screen.getByRole("tab");
  expect(tab).toHaveTextContent("pizza");
});

test("결과 페이지: 맞힌 문제의 background-color가 녹색으로 표시되는가?", async () => {
  render(
    <QuestionContainer id={0} question="pizza" page="result" isCorrect={true}  />
  );
  const tab = screen.getByRole("tab");
  expect(tab).toHaveStyle(`background-color: #00c896`);
});

test("결과 페이지: 틀린 문제의 background-color가 적색으로 표시되는가?", async () => {
  render(
    <QuestionContainer id={0} question="pizza" page="result" isCorrect={false} />
  );
  const tab = screen.getByRole("tab");
  expect(tab).toHaveStyle(`background-color: #fc8383`);
});