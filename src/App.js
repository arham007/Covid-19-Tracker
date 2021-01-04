import React, { useEffect, useState } from 'react';
import Cards from './Components/Cards';
import Countrypicker from './Components/Countrypicker';
import Chart from './Components/Chart';
import { fetchGlobal } from "./Api";


function App() {
  let [global,setGlobal]=useState({})
  useEffect(()=>{
    async function fetchApi(){
   
      setGlobal(await fetchGlobal())
      
    } 

    fetchApi()
  },[])
 
  const handleChange=async (country)=>{
    const data=await fetchGlobal(country)
    setGlobal(data)

  }
  
  return (
   <>
   <div className="container">
     <Cards data={global} />
     <br /><br />
     <Countrypicker handleChange={handleChange} />
     <br /><br />
     <Chart />
   </div>
   </>
  );
}

export default App;
