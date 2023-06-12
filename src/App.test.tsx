import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { render } from "@testing-library/react";

import { ProtectedRoute } from "./hocs/ProtectedRoute";
import { HomePage } from "./components/HomePage";
import { LoginForm } from "./components/forms/LoginForm";

describe("Should check the appropriate content", () => {
  it("Should render login page if token was not provided", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute redirectPath="/login">
                <HomePage resetToken={jest.fn} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={<LoginForm setToken={jest.fn} />}
          ></Route>
        </Routes>
      </BrowserRouter>,
    );
  });
  it("Should render home page if token is correct", () => {
    const token = JSON.stringify({ token: "Token" });
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute token={token} redirectPath="/login">
                <HomePage resetToken={jest.fn} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={<LoginForm setToken={jest.fn} />}
          ></Route>
        </Routes>
      </BrowserRouter>,
    );
  });
});
