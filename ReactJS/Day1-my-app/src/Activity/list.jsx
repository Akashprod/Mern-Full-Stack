import { Person } from "./Person";

import React from 'react'

export const List = ({people}) => {
  return (
    <div>
        {people.map((person)=>{
            return <Person key={person.id} {...person}  />
        })}
    </div>
  )
}

