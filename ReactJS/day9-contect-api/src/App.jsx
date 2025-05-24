import React, { useContext } from 'react'
import NavBar from './Component/NavBar'
import { ThemeContext } from './Context/ThemeContextProvider';

const App = () => {

  const{theme,toggleTheme} = useContext(ThemeContext);

  return (
    <div style={{background:theme==="dark"?"red":"skyblue",
                color : theme==="dark"?"skyblue":"red",
                padding:"10px"
    }}>
      <NavBar/>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default App