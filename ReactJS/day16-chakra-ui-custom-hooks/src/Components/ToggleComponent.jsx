import React from 'react'
import Fetching from './Fetching';
import useToggle from '../custom hooks/useToggle';

const ToggleComponent = () => {

     const [isVisible,handleToggle] = useToggle(false);
  return (
    <div>
        <button onClick={handleToggle} style={{backgroundColor : "lightGreen"}}>
            {isVisible ? "Hide Content" : "Show Content"}
        </button>
        {isVisible && <Fetching/>}
    </div>
  )
}

export default ToggleComponent