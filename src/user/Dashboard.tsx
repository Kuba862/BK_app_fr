import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [userID_helper, setUserID_helper] = useState<string>('');
  const { userID } = useContext(AuthContext);

  useEffect(() => {
    if(!userID) {
      setUserID_helper(localStorage.getItem('userID') || '');
    }
  }, [userID]);
  
  return (
    <>
      <div>Dashboard</div>
      <Link to={`/presentations/${userID ? userID : userID_helper }`}>Zobacz swoje prezentacje</Link>
    </>
  )
}

export default Dashboard