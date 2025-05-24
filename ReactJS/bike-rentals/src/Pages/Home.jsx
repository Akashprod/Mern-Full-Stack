import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Components/Loading';
import Bike from '../Components/Bike';




const Home = () => {


  const [loading,setLoading] = useState(false);
  const [data,setData] = useState([]);
  const fetchingData = async () => {
    setLoading(true);
    try {
      
     const data = await axios.get("http://localhost:3000/bikes");
     console.log(data.data);
     setData(data.data);
     setLoading(false);
    } catch (error) {
     console.log(error);
     setLoading(false);
    }
   }
 
  useEffect(()=>{
    fetchingData();
  },[]);

  if(loading){
    <Loading/>
  }
  return (
    <div style={{display:"grid", gridTemplateColumns: "repeat(4, 1fr)"}}>
      {data.map((item)=>{
        return <Bike key={item.id} {...item}/>
      })}
    </div>
  )
}

export default Home