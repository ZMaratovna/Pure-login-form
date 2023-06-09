import { mockedFetch } from "../mocks/fetch";
import { IToken, IUserCreds } from "../typings";

export const loginUser = (_credentials: IUserCreds): Promise<IToken> =>
  mockedFetch(true).then((data) => data.json());
