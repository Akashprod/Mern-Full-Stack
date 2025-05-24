import React from 'react'
import Login from '../Pages/Login';
import { useSelector } from 'react-redux';

const PrivateRoute = ({children}) => {
  // const auth = false;
  // console.log(children);

 const isAuth =  useSelector((store)=>store.authReducerFunction.isAuth);

  return (
    <>
   {isAuth ? children : <Login/>}
    </>
  )
}

export default PrivateRoute