import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [count,setCount] = useState(10);

    useEffect(()=>{
        let id = setInterval( ()=>{
            console.log("Counter", Date.now());
            setCount((prev)=>{
                if(prev<=1){
                    clearInterval(id);
                }
                else{
                    return prev-1;    
                }
            });

            

        },1000);
        return() =>{
            console.log("clean up function");
            clearInterval(id);
        }
    },[]);
  return (
    <div>{count}</div>
  )
}

export default Timer