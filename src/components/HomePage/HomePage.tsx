import React from "react";

import { Button } from "../button/Button";
import { IButtonType } from "../../typings";

import "./HomePage.scss";

interface IHomePageProps {
  resetToken: () => void;
}

export const HomePage = ({ resetToken }: IHomePageProps): JSX.Element => {
  return (
    <main className="home-page-container">
      <h2>You are successfully logged in!</h2>
      <Button
        text="Sign out"
        type={IButtonType.Button}
        className="home-page-signout-btn"
        onClick={resetToken}
      />
    </main>
  );
};
