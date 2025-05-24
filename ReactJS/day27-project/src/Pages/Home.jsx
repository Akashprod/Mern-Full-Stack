import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import Header from '../Components/Header'
import NavBar from '../Components/NavBar'
import Loading from '../Components/Loading'

const Home = () => {

const navigation = useNavigation();
const isLoading = navigation.state === "loading";
;

  return (
    <div>
<Header/>
<NavBar/>
      {isLoading ? <Loading/> : <Outlet/>}
    </div>
  )
}

export default Home