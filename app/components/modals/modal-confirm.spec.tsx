import "@testing-library/jest-dom"
import { render } from "@testing-library/react";
import { ConfirmModal } from "@components/modals";

describe("Component: ConfirmModal -> ", () => {
  test("Render ConfirmModal", async () => {
    const { getByText } = render(<ConfirmModal title="Success" confirmBody="Render successfully"/>);
    expect(getByText("Success")).toBeInTheDocument();
    expect(getByText("Render successfully")).toBeInTheDocument();
  });
})
