import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const Dashboard = () => {
  const {user} = useContext(UserContext);

  if(!user){
    return <div>Please Login</div>
  }

  else{
    return <div> Welcome !! {user.email} {user.password}</div>
  }
}

export default Dashboard;
