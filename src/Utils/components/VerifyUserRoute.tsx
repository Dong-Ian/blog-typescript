import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useCheckToken } from "Utils/hooks/useCheckToken";

import Loading from "./Loading";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isAuthorized === null) {
    return <Loading />;
  }

  if (!isAuthorized) {
    return <Navigate to="/" />;
  }

  return children;
};

export default VerifyUserRoute;
