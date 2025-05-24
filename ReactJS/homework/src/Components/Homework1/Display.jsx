import data from "./data"
import UserDetails from './UserDetails'

import React from 'react'

const Display = () => {
    return (
        <>
        <h3>The User Details are</h3>
        <UserDetails people={data}/>
        </>
      )
}

export default Display