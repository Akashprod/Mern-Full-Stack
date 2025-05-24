import React from 'react'
import { useRouteError } from 'react-router'

const SinglePageError = () => {

const error = useRouteError();

  return (
    <div>
      <h2>Something went wrong...</h2>
      <h4>{error.message}</h4>
    </div>
    
  )
}

export default SinglePageError