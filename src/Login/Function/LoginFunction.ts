import { LoginFunctionProps } from "Login/Type/LoginType";
import EncryptFunction from "Utils/Module/EncryptFunction";

export default async function LoginFunction({
  email,
  password,
}: LoginFunctionProps) {
  const encryptedEmail = EncryptFunction({ data: email });
  const encryptedPassword = EncryptFunction({ data: password });

  const result = await fetch(`${process.env.REACT_APP_API}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: encryptedEmail,
      password: encryptedPassword,
    }),
  });

  const res = await result.json();

  return res;
}
