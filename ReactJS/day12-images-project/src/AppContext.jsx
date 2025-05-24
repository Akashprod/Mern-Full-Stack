import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'

const AppContext = createContext();

const getInitialMode = ()=>{

    const preferDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
 
    const storedDarkMode = localStorage.getItem("darkTheme");

    if(storedDarkMode === null){
        return preferDarkMode;
    }
    return storedDarkMode==="true";
} ;

export const AppContextProvider = ({children}) => {

    const[isDarkTheme,setIsDarkTheme] = useState(getInitialMode);
    const [searchTerm,setSearchTerm] = useState("cat");

    const toggleDarkTheme = ()=>{

        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);

        localStorage.setItem("darkTheme",newDarkTheme);
    }


    useEffect(()=>{
        document.body.classList.toggle("dark-theme",isDarkTheme);
    },[isDarkTheme]);

  return (
    <AppContext.Provider value={{isDarkTheme,setIsDarkTheme,toggleDarkTheme,searchTerm,setSearchTerm}}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

