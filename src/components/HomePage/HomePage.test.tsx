import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { IButtonType } from "../../typings";

import { HomePage } from "./HomePage";

describe("Test suite for Homepage component", () => {
  it("Home pages renders content", async () => {
    render(
      <HomePage
        resetToken={() => {
          jest.fn();
        }}
      />,
    );
    const greeting: HTMLTitleElement = screen.getByText(
      "You are successfully logged in!",
    );
    const button: HTMLButtonElement = screen.getByTestId(IButtonType.Button);

    expect(greeting).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
    expect(button).toHaveTextContent("Sign out");
  });
});
