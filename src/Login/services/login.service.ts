import { LoginFunctionProps } from "Login/types/Login.type";
import EncryptFunction from "Utils/Module/EncryptFunction";

export default async function login({ email, password }: LoginFunctionProps) {
  const encryptedEmail = EncryptFunction({ data: email });
  const encryptedPassword = EncryptFunction({ data: password });

  const result = await fetch(`${process.env.REACT_APP_API}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email: encryptedEmail,
      password: encryptedPassword,
    }),
  });

  const res = await result.json();

  return res;
}
