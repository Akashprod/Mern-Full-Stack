import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';

const NavBar = () => {

  const {isAuth,login,logout} =  useContext(AuthContext);

  return (
    <div>
        <h5>Is User Authenticated : {isAuth ? "yes" : "no"}</h5>
        {!isAuth&&<button onClick={login}>Login</button>}
      {isAuth && <button onClick={logout}>Logout</button>}  
    </div>
  )
}

export default NavBar