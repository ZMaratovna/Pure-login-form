export interface IUserCreds {
  email: string;
  password: string;
}
export interface IToken {
  token?: string;
  saveToken: (token: IToken) => void;
  resetToken: () => void;
}
export interface IValidation {
  isValid: boolean;
  message: null | string;
  value: string;
}
export enum IFieldType {
  Email = "email",
  Password = "password",
  Text = "text",
}
export enum IButtonType {
  Submit = "submit",
  Button = "button",
  Reset = "reset",
}
