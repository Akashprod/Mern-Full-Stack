import React from 'react'

const BtnContainer = ({jobs,setCurrentItem,currentItem}) => {
  return (
    <div>{jobs.map((item,index)=>{
        return <button key={item.id} onClick={()=>setCurrentItem(index)}>{item.company}</button>
    })}</div>
  )
}

export default BtnContainer