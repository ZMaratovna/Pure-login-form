import { IValidation } from "../typings";

export const validateEmail = (value: string): IValidation => {
  const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  const message = isValid ? null : "Please, enter a valid email address";
  return { value, isValid, message };
};

export const validatePassword = (value: string): IValidation => {
  const isValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
      value,
    );
  const message = isValid
    ? null
    : "Min 6 characters, at least one uppercase letter, one lowercase letter, one number and one special character";
  return { value, isValid, message };
};
