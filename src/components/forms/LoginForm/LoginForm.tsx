import React from "react";
import classNames from "classnames";
import { Navigate } from "react-router-dom";
import { useMemo, useState } from "react";

import { useValidation } from "../../../hooks";
import { loginUser } from "../../../api/loginUser";
import { IButtonType, IFieldType, IToken, IValidation } from "../../../typings";
import { TextField } from "../TextField";
import { Button } from "../../button/Button";

import "./LoginForm.scss";

interface ILoginProps {
  setToken: (userToken: IToken) => void;
  token?: string;
}

export const LoginForm = ({ token, setToken }: ILoginProps): JSX.Element => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [emailInfo, pwdInfo] = useValidation(email, pwd);

  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingError, setIsFetchingError] = useState(false);

  const isDisabled = !email || !pwd || !emailInfo.isValid || !pwdInfo.isValid;

  const dirtyValidField = (field: IValidation) =>
    !!(field.isValid && field.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = e.target;
    const input = t.value;
    const isEmail = t.name === IFieldType.Email;
    isEmail ? setEmail(input) : setPwd(input);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsFetching(true);
      const token = await loginUser({
        email,
        password: pwd,
      });
      setToken(token);
    } catch (e) {
      setIsFetchingError(true);
    } finally {
      setIsFetching(false);
    }
  };

  const statusDescription = useMemo(() => {
    return isFetchingError
      ? "Ooops...These credentials are invalid!"
      : "Enter your credentials to access to your account";
  }, [isFetchingError]);

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className={classNames("login", { loading: isFetching })}>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <h2 className="login-form-title">Welcome back!</h2>
          <h5
            className={classNames("login-form-subtitle", {
              error: isFetchingError,
            })}
          >
            {statusDescription}
          </h5>
        </div>
        <div className="login-form-fields">
          <TextField
            type={IFieldType.Email}
            value={email}
            placeholder=""
            label="Email"
            isValid={dirtyValidField(emailInfo)}
            isError={!emailInfo.isValid}
            onChange={handleChange}
            info={emailInfo}
          />
          <TextField
            type={IFieldType.Password}
            value={pwd}
            placeholder=""
            label="Password"
            isValid={dirtyValidField(pwdInfo)}
            isError={!pwdInfo.isValid}
            onChange={handleChange}
            info={pwdInfo}
          />
          <Button
            type={IButtonType.Submit}
            text="Sign in"
            className={classNames("login-form-button", {
              progress: isFetching,
            })}
            disabled={isDisabled}
            inProgress={isFetching}
          />
        </div>
      </form>
    </div>
  );
};
