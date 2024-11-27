import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import {
  DashboardCard,
  LoadingContainer,
  DashboardContainer,
} from '../style/Dashboard';

const Dashboard = () => {
  const { userID } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (userID) {
      setIsLoading(false);
    }
  }, [userID]);

  if (isLoading && !userID) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }

  return (
    <DashboardContainer>
      <DashboardCard to={`/presentations/${userID}`}>
        Zobacz swoje prezentacje
      </DashboardCard>
      <DashboardCard to={`/add-presentation/${userID}`}>
        Dodaj nową prezentację
      </DashboardCard>
      <DashboardCard to={`/media/${userID}`}>
        Twoje media
      </DashboardCard>
    </DashboardContainer>
  );
};

export default Dashboard;
