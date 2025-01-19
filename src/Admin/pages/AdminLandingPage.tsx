import React from "react";

import AdminPage from "./AdminPage";
import { useAccount } from "Utils/hooks/useAccount";

const AdminLandingPage: React.FC = () => {
  const userInfo = useAccount();

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return <AdminPage profile={userInfo} />;
};

export default AdminLandingPage;
