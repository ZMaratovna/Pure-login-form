import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import { HomePage } from "./components/HomePage/HomePage";
import { LoginForm } from "./components/forms/LoginForm/LoginForm";
import { useToken } from "./hooks";
import { ProtectedRoute } from "./hocs/ProtectedRoute";

function App(): JSX.Element {
  const { token, saveToken, resetToken } = useToken();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute token={token} redirectPath="/login">
              <HomePage resetToken={resetToken} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={<LoginForm token={token} setToken={saveToken} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
