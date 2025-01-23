import React, { useEffect } from "react";

import AdminPage from "./AdminPage";
import { useFetchUser } from "Utils/hooks/useFetchUser";
import Loading from "Utils/components/Loading";

const AdminLandingPage: React.FC = () => {
  const { userInfo, isLoading, refetch } = useFetchUser();

  useEffect(() => {
    refetch();
  });

  if (!userInfo || isLoading) {
    return <Loading />;
  }

  return <AdminPage profile={userInfo} />;
};

export default AdminLandingPage;
