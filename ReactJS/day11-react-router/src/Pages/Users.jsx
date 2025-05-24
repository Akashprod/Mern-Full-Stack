import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';


const Users = () => {

const [data,setData] = useState([]);

async function fetchingData() {
    try {
        let response = await fetch("https://reqres.in/api/users?page=2");
        let data = await response.json();
        setData(data.data);

    } catch (error) {
        console.log(error);
    }
}

useEffect(()=>{
    fetchingData();
},[]);

  return (
    <div >
        <h1>Users Data</h1>
        {data.map((user)=>{
            return(
                <div key={user.id} style={{gap : "2px"}}>
                    <img src={user.avatar} alt="" />
                    <Link to={`${user.id}`} style={{textDecoration:"none"} }>
                    {user.first_name}  
                    </Link>
                    
                </div>
                
            )
        })}
    </div>
  )
}

export default Users