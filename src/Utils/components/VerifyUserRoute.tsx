import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useCheckToken } from "Utils/hooks/useCheckToken";
import { chcekToken } from "Utils/services/checkToken.service";
interface VerifyUserRouteProps {
  children: React.ReactElement;
}

const VerifyUserRoute: React.FC<VerifyUserRouteProps> = ({ children }) => {
  const handleCheckToken = useCheckToken();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  const validToken = async () => {
    const isValid = await handleCheckToken();
    setIsAuthorized(isValid);
  };

  useEffect(() => {
    validToken();
  }, [chcekToken]);

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthorized) {
    return <Navigate to="/" />;
  }

  return children;
};

export default VerifyUserRoute;
