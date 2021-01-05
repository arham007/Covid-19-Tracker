import React, { useEffect, useState } from 'react';
import Cards from './Components/Cards';
import Countrypicker from './Components/Countrypicker';
import Chart from './Components/Chart';
import { fetchGlobal } from "./Api";
import { Header } from "./Components/Header";

function App() {
  let [global,setGlobal]=useState({});
  let [country,setCountry]=useState("");
  useEffect(()=>{
    async function fetchApi(){
   
      setGlobal(await fetchGlobal())
      
    } 

    fetchApi()
  },[setGlobal])
 
  const handleChange=async (country)=>{
    setCountry(country)
    const data=await fetchGlobal(country)
    setGlobal(data)

  }
  
  return (
   <>
   <Header />
   <div className="container">
     <Cards data={global} />
     <br /><br />
     <Countrypicker handleChange={handleChange} />
     <br /><br />
     <Chart global={global} country={country} />
   </div>
   </>
  );
}

export default App;
