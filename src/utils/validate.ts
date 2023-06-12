import { IValidation } from "../typings";

export const PWD_ERROR_MSG =
  "Min 6 characters, at least one uppercase letter, one lowercase letter, one number and one special character";
export const EMAIL_ERROR_MSG = "Please, enter a valid email address";

export const validateEmail = (value: string): IValidation => {
  const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  const message = isValid ? null : EMAIL_ERROR_MSG;
  return { value, isValid, message };
};
export const validatePassword = (value: string): IValidation => {
  const isValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
      value,
    );
  const message = isValid ? null : PWD_ERROR_MSG;
  return { value, isValid, message };
};
