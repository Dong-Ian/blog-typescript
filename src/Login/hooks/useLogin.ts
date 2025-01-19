import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoggedInState } from "Utils/atom/Atom";
import login from "Login/services/login.service";

export function useLogin() {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const handleLogin = async (email: string, password: string) => {
    const result = await login({ email, password });

    if (!result.result) {
      alert("이메일/비밀번호가 일치하지 않습니다.");
      return false;
    }

    setIsLoggedIn(true);
    navigate("/");
    return true;
  };

  return { handleLogin };
}
