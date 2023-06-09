import React from "react";

import "./App.scss";
import { HomePage } from "./components/HomePage/HomePage";
import { LoginForm } from "./components/forms/LoginForm/LoginForm";
import { useToken } from "./hooks";

function App(): JSX.Element {
  const { token, saveToken, resetToken } = useToken();

  if (!token) {
    return (
      <div className="App">
        <LoginForm setToken={saveToken} />
      </div>
    );
  }
  return <HomePage resetToken={resetToken} />;
}

export default App;
