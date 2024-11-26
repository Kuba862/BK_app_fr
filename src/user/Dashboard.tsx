import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
const Dashboard = () => {
  const { userID } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if(userID) {
      setIsLoading(false);
    }
  }, [userID]);

  if(isLoading && !userID) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div>Dashboard</div>
      <Link to={`/presentations/${userID}`}>Zobacz swoje prezentacje</Link>
    </>
  )
}

export default Dashboard