import React, { useEffect } from "react";

import AdminPage from "./AdminPage";
import { useFetchUser } from "Utils/hooks/useFetchUser";

const AdminLandingPage: React.FC = () => {
  const { userInfo, isLoading, refetch } = useFetchUser();

  useEffect(() => {
    refetch();
  });

  if (!userInfo || isLoading) {
    return <div>Loading...</div>;
  }

  return <AdminPage profile={userInfo} />;
};

export default AdminLandingPage;
