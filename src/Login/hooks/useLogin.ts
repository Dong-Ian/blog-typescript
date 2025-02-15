import { useNavigate } from "react-router-dom";
import login from "Login/services/login.service";

export function useLogin() {
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    const result = await login({ email, password });

    if (result.code !== "01") {
      alert("이메일/비밀번호가 일치하지 않습니다.");
      return false;
    }

    navigate("/");
    return true;
  };

  return { handleLogin };
}
