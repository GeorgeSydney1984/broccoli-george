import {getByText, render} from "@testing-library/react";
import "@testing-library/jest-dom"

import { Button } from "@components/button";

describe("Component: Button -> ", () => {
  test("Render primary button", async () => {
    const { getByText } = render(<Button text="click test button" type="primary"/>);
    expect(getByText("click test button")).toBeInTheDocument();
  });

  test("Render button with default button text", async () => {
    const { getByText } = render(<Button type="primary"/>);
    expect(getByText("click me")).toBeInTheDocument();
  });

  test("Render button with processing icon", async () => {
    const { container, queryAllByText, getByRole } = render(<Button text="click test button" type="primary" asyncProcessing />);

    expect(queryAllByText("click test button")).toHaveLength(0);
    expect(getByRole("processing-icon")).toBeInTheDocument();
    expect(container.querySelector("button")).toBeDisabled();
  })
})
