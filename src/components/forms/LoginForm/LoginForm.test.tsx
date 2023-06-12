import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { IButtonType, IFieldType } from "../../../typings";

import { LoginForm } from "./LoginForm";

describe("Test suite for LogiForm component", () => {
  it("Login form has correct validation", async () => {
    render(
      <LoginForm
        setToken={() => {
          jest.fn();
        }}
      />,
    );

    const testValue = "test";
    const emailInput: HTMLInputElement = screen.getByLabelText("Email");
    const passwordInput: HTMLInputElement = screen.getByLabelText("Password");
    const button: HTMLButtonElement = screen.getByTestId(IButtonType.Submit);

    fireEvent.change(passwordInput, { target: { value: testValue } });
    fireEvent.change(emailInput, { target: { value: testValue } });

    const role = `error-message-${IFieldType.Email}`;
    const emailError = screen.getByRole(role);
    const passwordError = screen.getByRole(
      `error-message-${IFieldType.Password}`,
    );

    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();

    expect(emailInput.value).toBe(testValue);
    expect(passwordInput.value).toBe(testValue);
    expect(button).toBeDisabled();
  });
});
