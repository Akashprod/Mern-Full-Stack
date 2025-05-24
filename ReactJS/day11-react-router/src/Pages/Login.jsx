import React from 'react'
import { GlobalContext } from '../Components/AuthContextProvider'
import { Link } from 'react-router';


const Login = () => {
  const {Login} = GlobalContext();
  

  return (
    <div>
      <br/>
      Name : <input type="text" placeholder='Enter your name' />
      <br/>
      Email : <input type="email" placeholder='Enter email' />
      <br/>
      Password : <input type="password" placeholder='Enter password' />
      <br/>
      <button onClick={Login}>
        <Link to="/users">
        Login
        </Link>
      </button>
      
        
    </div>
  )
}

export default Login