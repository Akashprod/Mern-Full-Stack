import React from 'react'
import axios from "axios";
import { useGlobalContext } from '../AppContext';
import { useQuery } from '@tanstack/react-query';

const API_KEY = "g3-QQSn7GTJ1kdI27Xzo_PG3YlgmbkU29T7jde5WY8E";


// const url =`https://api.unsplash.com/search/photos/?client_id=${import.meta.env.API_KEY}`;
const url =`https://api.unsplash.com/search/photos/?client_id=${API_KEY}`;

const Gallery = () => {

    const {searchTerm} = useGlobalContext();

    const response = useQuery({
        
        queryKey : ["images",searchTerm],
        queryFn : async  () =>{
            const result = await axios.get(`${url}&query=${searchTerm}`);
            console.log(result.data);
            return result.data;
        }
    });

    if(response.isLoading){
        return (<h4>Loading...</h4>)
    }
    if(response.isError){
        return (<h4>Error</h4>)
    }

  return (
    <section className='image-container'>
        {response.data.results.map((item)=>{
            const url = item?.urls?.regular;
            return( <img src={url} alt="item.description" key={item.id} /> )
        })}
    </section>
  )
}

export default Gallery