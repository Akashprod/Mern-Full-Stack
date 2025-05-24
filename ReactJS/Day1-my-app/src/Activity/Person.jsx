import React from 'react'

export const Person = (props) => {
    const {name,age} = props;
  return (
    <div>
        <h4>{name}</h4>
        <p>{age}</p>
    </div>
  )
}

