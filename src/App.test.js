import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("test for header render", () => {
  test(" header renders with correct text", () => {
    render(<App />);
    const headerEl = screen.getByRole("heading");
    expect(headerEl.textContent).toBe("Testing Playground");
  });
});
describe("test for the button", () => {
  test("button hanges color when clicked", () => {
    render(<App />);
    const colorBtn = screen.getByRole("button");

    userEvent.click(colorBtn);

    expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });
    expect(colorBtn.textContent).toBe("Change button color to green");
  });
});

describe("test for the checkbox", () => {
  test("checkbox disables and ables the button click", () => {
    render(<App />);
    const colorBtn = screen.getByRole("button");
    const checkbox = screen.getByRole("checkbox");

    userEvent.click(checkbox);
    expect(colorBtn).toBeDisabled();

    userEvent.click(checkbox);
    expect(colorBtn).toBeEnabled();
  });
});

describe("test for correct text", () => {
  test("accurate text appears when button is enabled or disabled", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox");
    const paragraphEl = screen.getByRole("paragraph");

    expect(paragraphEl.textContent).toBe("Button is enabled");

    userEvent.click(checkbox);
    expect(paragraphEl.textContent).toBe("Button is disabled");

    userEvent.click(checkbox);
    expect(paragraphEl.textContent).toBe("Button is enabled");
  });
});
