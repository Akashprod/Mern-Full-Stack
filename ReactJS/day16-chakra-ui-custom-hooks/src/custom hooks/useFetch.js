import { useEffect, useState } from "react";

const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      fetchData();
    }, [url]);
  
    return {data,loading,error};

}

export default useFetch;