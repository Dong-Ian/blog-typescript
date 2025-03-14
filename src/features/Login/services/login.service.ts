import { LoginFunctionProps } from "features/Login/types/Login.type";
import encrypt from "Utils/services/encrypt.service";

export default async function login({ email, password }: LoginFunctionProps) {
  const encryptedEmail = encrypt({ data: email });
  const encryptedPassword = encrypt({ data: password });

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
