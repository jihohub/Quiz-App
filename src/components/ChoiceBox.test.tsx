/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChoiceBox from "./ChoiceBox";

test("ChoiceBox 컴포넌트가 문제를 잘 보여주는지", async () => {
  const choice = "53";
  const renderChoiceBox = render(<ChoiceBox choice={choice} />);

  const { container } = renderChoiceBox;
  expect(container).toHaveTextContent(choice);
});
