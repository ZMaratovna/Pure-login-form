import { useState } from "react";

import { IToken } from "../typings";

export const useToken = (): IToken => {
  const getToken = (): string | undefined => {
    const tokenString = localStorage.getItem("token");
    if (tokenString) {
      const userToken = JSON.parse(tokenString);
      return userToken?.token;
    }
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (token: IToken) => {
    localStorage.setItem("token", JSON.stringify(token));
    setToken(token.token);
  };
  const removeToken = () => {
    localStorage.removeItem("token");
    setToken(undefined);
  };

  return {
    saveToken,
    resetToken: removeToken,
    token,
  };
};
