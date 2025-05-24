import React from 'react'
import img from "../assets/illustration.svg"
import { Link, useRouteError } from 'react-router'
import Wrapper from '../Wrappers/Error';

const Error = () => {

const error = useRouteError();

if(error.status === 404){
  return <Wrapper>
    <img src={img} alt="" />
    <h3>ohh!!!</h3>
    <p>We can't seem to find the page...</p>
    <Link to="/" className='btn'>Back Home</Link>
  </Wrapper>
}

  return (
    <Wrapper>
      <h3>Something went wrong</h3>
    </Wrapper>
  )
}

export default Error