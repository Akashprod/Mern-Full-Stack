import React from 'react'
import Person from './Person'

const UserDetails = ({people}) => {
  return (
    <div>
{people.map((person)=>{
    return <Person key={person.id} {...person}/>
})}
    </div>
  )
}

export default UserDetails