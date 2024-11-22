import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { userID } = useContext(AuthContext);
  return (
    <>
      <div>Dashboard</div>
      <Link to={`/presentations/${userID}`}>Zobacz swoje prezentacje</Link>
    </>
  )
}

export default Dashboard