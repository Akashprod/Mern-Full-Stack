import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';
import { toast } from 'react-toastify';

const SingleUserPage = () => {
  const [data,setData] = useState({});
  const params = useParams();

  async function fetchingData(params) {
    let response = await fetch(`https://reqres.in/api/users/${params.id}`);
    let data = await response.json();
    console.log(data);
    setData(data.data);
  }

  useEffect(()=>{
    fetchingData(params);
    
    console.log("hi");
  },[]);

  return (
    
    <div>
      <img src={data.avatar} alt="" />
      <p>{data.first_name}</p>
      
      <Link to="/users">
        <button>Back</button>
      </Link>
    </div>
  )
}

export default SingleUserPage