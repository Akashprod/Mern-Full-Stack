import React, { useEffect, useState } from "react";
import BtnContainer from "./Components/BtnContainer";
import JobInfo from "./Components/JobInfo";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const URL = "https:/www.course-api.com/react-tabs-project";

  const fetching = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setJobs(data);
      setLoading(false);
      // console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  if(loading){
    return(
    <section>
      <div>Loading...</div>
    </section>)
  }
  return <section>
    <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
    <JobInfo jobs={jobs} currentItem={currentItem} />
  </section>
};

export default App;
