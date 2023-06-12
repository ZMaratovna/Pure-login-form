import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { IFieldType, IValidation } from "../../../typings";

import "./TextField.scss";

interface ITextFieldProps {
  isValid: boolean;
  isError: boolean;
  type: IFieldType;
  label: string;
  value: string;
  placeholder: string;
  info: IValidation;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export const TextField = ({
  isValid,
  isError,
  type,
  label,
  value,
  placeholder,
  info,
  onChange,
}: ITextFieldProps): JSX.Element => {
  const [isHidePassword, setIsHidePassword] = useState(true);
  const isPassword = type === IFieldType.Password;
  const isShowEye = isPassword && !isHidePassword;
  const isShowInvisibleEye = isPassword && isHidePassword;

  const passwordRef = useRef<HTMLInputElement>(null);
  const getRef = () => (type === IFieldType.Password ? passwordRef : null);

  const handlePasswordVisibility = () => {
    setIsHidePassword(!isHidePassword);
  };
  useEffect(() => {
    if (passwordRef?.current) {
      passwordRef.current.type = !isHidePassword
        ? IFieldType.Text
        : IFieldType.Password;
    }
  }, [isHidePassword]);

  return (
    <div className="form-group">
      <label htmlFor={type} className="form-group-label">
        {label}
      </label>
      <input
        id={type}
        className={classNames({ error: isError }, { correct: isValid })}
        type={type}
        name={type}
        aria-label={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
        ref={getRef()}
      />
      {isShowEye && (
        <AiOutlineEye
          onClick={handlePasswordVisibility}
          className={classNames("form-group-input-icon")}
        />
      )}
      {isShowInvisibleEye && (
        <AiOutlineEyeInvisible
          onClick={handlePasswordVisibility}
          className={classNames("form-group-input-icon", "active")}
        />
      )}
      {isError && (
        <div className="form-group-error-msg" role={`error-message-${type}`}>
          {info.message}
        </div>
      )}
    </div>
  );
};
