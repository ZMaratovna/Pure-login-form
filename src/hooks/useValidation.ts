import { useEffect, useState } from "react";

import { IValidation } from "../typings";
import { validateEmail, validatePassword } from "../utils/validate";

export const useValidation = (
  email: string,
  password: string,
): IValidation[] => {
  const [validationEmail, setIsValidationEmail] = useState<IValidation>({
    value: email,
    isValid: true,
    message: null,
  });
  const [isValidationPwd, setIsValidationPwd] = useState<IValidation>({
    value: password,
    isValid: true,
    message: null,
  });

  useEffect(() => {
    if (password) {
      setIsValidationPwd(validatePassword(password));
    }
  }, [password]);

  useEffect(() => {
    if (email) {
      setIsValidationEmail(validateEmail(email));
    }
  }, [email]);

  return [validationEmail, isValidationPwd];
};
