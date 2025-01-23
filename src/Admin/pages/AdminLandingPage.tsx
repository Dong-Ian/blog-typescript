import React, { useEffect } from "react";
import AdminPage from "./AdminPage";
import Loading from "Utils/components/Loading";
import { useFetchUser } from "Utils/hooks/useFetchUser";

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
