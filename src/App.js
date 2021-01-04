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
  // console.log(global)
  
  return (
   <>
   <div className="container">
     <Cards data={global} />
     {/* <Countrypicker />
     <Chart /> */}
   </div>
   </>
  );
}

export default App;
