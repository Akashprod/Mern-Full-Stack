import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet, useNavigation } from 'react-router'

const HomeLayout = () => {

const navigation = useNavigation();
// console.log(navigation);
const isPageLoading = navigation.state === "loading";

// const value = "someValue";


  return (
    
    <div>
        <Navbar/>
        <section className='page'>
            {isPageLoading ? <div className='loading'></div> : <Outlet  />} 
        </section>
    </div>
  )
}

export default HomeLayout