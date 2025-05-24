import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetailsPage = () => {

 const {id} =  useParams()
 const [data,setData] = useState({});

// console.log(id);

useEffect(()=>{
  axios.get(`http://localhost:3000/products/${id}`)
.then((res)=>{
  console.log(res.data);
  return setData(res.data)
})
.catch((error)=>console.log(error));
},[id]);




  return (
    <div key={data.id} style={{display:"flex",flexDirection:"column",margin:"1px",gap:"1px",justifyContent:"center",alignItems:"center"}}>

      <h2>{data.title}</h2>
      <p>{data.category}</p>
      <p>{data.price}</p>
      <p>{data.location}</p>
      <p>{data.seller?.name}</p>
      <p>{data.seller?.email}</p> 
      <p>{data.createdAt}</p>
      <img src={data.images} alt="" />
    </div>
  )
}

export default ProductDetailsPage