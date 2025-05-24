import React, { useEffect, useState } from 'react'

export const Count = () => {
    const [count,setCount] = useState(0);

    console.log("above useEffect");

    useEffect(()=>{
      const fetching = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
          const data = await response.json();
          console.log(data);
          console.log("Inside useEffect");
        } catch (error) {
          console.log(error);
        }
      }
      fetching();
    },[count]);

    console.log("below UseEffect");

    function Button({count,setCount}){
      return <button onClick={()=>setCount(count+1)}>Inc</button>
    }

  return (
    <>
    <div>{count}</div>
    <Button  setCount={setCount} count={count} />
    </>
  )
}
