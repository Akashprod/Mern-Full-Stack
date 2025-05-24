import React from 'react'
import Duties from './Duties';

const JobInfo = ({jobs,currentItem}) => {
    const {title,duties,dates,company} = jobs[currentItem];
  return (
   <article>
        <h3>{ClipboardItem.title}</h3>
        <span>{company}</span>
        <p>{dates}</p>
        <Duties duties={duties}/>
   </article>
  )
}

export default JobInfo