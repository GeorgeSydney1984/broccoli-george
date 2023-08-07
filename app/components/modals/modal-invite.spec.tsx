import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react";
import { InviteModal } from "@components/modals";

describe("Component: InviteModal -> ", () => {
  const getInputsRenderedInviteModal = (container: HTMLElement) => {
    const fullnameInput = container.querySelector("input[type=text]") as HTMLInputElement;
    const emailInput = container.querySelectorAll("input[type=email]")[0] as HTMLInputElement;
    const confirmEmailInput = container.querySelectorAll("input[type=email]")[1] as HTMLInputElement;

    return [fullnameInput, emailInput, confirmEmailInput];
  }

  test("Render InviteModal", async () => {
    const { container, getByText } = render(<InviteModal title="Test invite form" onSend={() => new Promise((resolve) => resolve({ success: true }))}/>);
    expect(getByText("Test invite form")).toBeInTheDocument();
    expect(container.querySelector("input[type=text]")).toBeInTheDocument();
    expect(container.querySelectorAll("input[type=email]")).toHaveLength(2);
  });

  test("Show error message when user not fill all fields", async () => {
    const { container, getByText } = render(<InviteModal title="Test invite form" onSend={() => new Promise((resolve) => resolve({ success: true }))}/>);
    const button = container.querySelector("button") as HTMLButtonElement;

    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(getByText("Please fill all required fields")).toBeInTheDocument();
  });

  test("Show error message when user enter full name less than 3 characters", async () => {
    const { container, getByText } = render(<InviteModal title="Test invite form" onSend={() => new Promise((resolve) => resolve({ success: true }))}/>);
    const button = container.querySelector("button") as HTMLButtonElement;
    const [fullnameInput, emailInput, confirmEmailInput] = getInputsRenderedInviteModal(container);
    
    fireEvent.change(fullnameInput, {target: {value: "ab"}});
    fireEvent.change(emailInput, {target: {value: "george@test.com"}});
    fireEvent.change(confirmEmailInput, {target: {value: "george@test.com"}});
    fireEvent.click(button);

    expect(getByText("The full name field must be at least 3 characters")).toBeInTheDocument();
  });

  test("Show error message when user enter email not valid email format", async () => {
    const { container, getByText } = render(<InviteModal title="Test invite form" onSend={() => new Promise((resolve) => resolve({ success: true }))}/>);
    const button = container.querySelector("button") as HTMLButtonElement;
    const [fullnameInput, emailInput, confirmEmailInput] = getInputsRenderedInviteModal(container);
    
    fireEvent.change(fullnameInput, {target: {value: "george"}});
    fireEvent.change(emailInput, {target: {value: "george@test"}});
    fireEvent.change(confirmEmailInput, {target: {value: "george@test"}});
    fireEvent.click(button);

    expect(getByText("Please enter an valid email address")).toBeInTheDocument();
  });

  test("Show error message when user enter confirm email not match email", async () => {
    const { container, getByText } = render(<InviteModal title="Test invite form" onSend={() => new Promise((resolve) => resolve({ success: true }))}/>);
    const button = container.querySelector("button") as HTMLButtonElement;
    const [fullnameInput, emailInput, confirmEmailInput] = getInputsRenderedInviteModal(container);
    
    fireEvent.change(fullnameInput, {target: {value: "george"}});
    fireEvent.change(emailInput, {target: {value: "george@test.com"}});
    fireEvent.change(confirmEmailInput, {target: {value: "george@test2.com"}});
    fireEvent.click(button);

    expect(getByText("The confirm email address not match")).toBeInTheDocument();
  });

  test("Show error message when send request return error", async () => {
    const { container, getByText } = render(
      <InviteModal
        title="Test invite form"
        onSend={() => new Promise((resolve) => resolve({ success: false, message: 'error in mocked api request' }))}
      />
    );
    const button = container.querySelector("button") as HTMLButtonElement;
    const [fullnameInput, emailInput, confirmEmailInput] = getInputsRenderedInviteModal(container);
    
    fireEvent.change(fullnameInput, {target: {value: "george"}});
    fireEvent.change(emailInput, {target: {value: "george@test.com"}});
    fireEvent.change(confirmEmailInput, {target: {value: "george@test.com"}});
    fireEvent.click(button);

    expect(button).toBeDisabled();

    await screen.findByText('Send')

    expect(getByText("error in mocked api request")).toBeInTheDocument();
  });
})

