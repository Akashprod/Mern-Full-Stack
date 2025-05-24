import React from 'react'
import { Navigate } from 'react-router';
import { GlobalContext } from '../Components/AuthContextProvider';

const PrivateRoute = ({children}) => {
    // let isAuth = false;
    const {isAuth} = GlobalContext();

    if(!isAuth){
        return(<Navigate to={"/login"}/>)
       
    }

  return (
    <div>{children}</div>
  )
}

export default PrivateRoute