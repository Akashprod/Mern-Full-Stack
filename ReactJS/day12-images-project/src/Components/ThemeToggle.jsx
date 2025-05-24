import React from 'react'
import { useGlobalContext } from '../AppContext'
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const ThemeToggle = () => {

  const {isDarkTheme,toggleDarkTheme} = useGlobalContext();

  return (
    <section className='toggle-container'>
        <button onClick={toggleDarkTheme} className='btn'>
          {isDarkTheme 
          ? <BsFillMoonFill className='toggle-icon moon' /> 
          : <BsFillSunFill className='toggle-icon sun' />}
        </button>
    </section>
  )
}

export default ThemeToggle