import React, { useEffect, useState } from "react";

import { fetchDaily } from "../Api";
import { Line , Bar } from "react-chartjs-2";

const Chart=({global: {confirmed , recovered , deaths},country})=>{
  
  let [daily,setDaily]=useState([])
  useEffect(()=>{
    const fetchApi=async ()=>{
      setDaily(await fetchDaily())
    }

    fetchApi()
  },[])
  
  const linedata = {
    labels: daily.map((arham)=>arham.date),
    datasets: [
      {
        label: "Infected",
        data: daily.map((arham)=>arham.confirmed),
        fill: true,
        backgroundColor: "rgba(0,0,255,0.2)",
        borderColor: "rgba(0,0,255,0.5)"
      },
      {
        label: "Deaths",
        data: daily.map((arham)=>arham.deaths),
        fill: true,
        backgroundColor: "rgba(255,0,0,0.2)",
        borderColor: "rgba(255,0,0,0.5)"
      }
    ]
  };
 
if (!confirmed){
  return null
}
  const bar = {
    labels: ['Infected','Reacovered','Deaths'],
    datasets: [
      {
        label: ['Infected','Recovered','Deaths'],
        backgroundColor: [
          'rgba(0,0,255,0.5)',
          'rgba(0,255,0,0.5)',
          'rgba(255,0,0,0.5)'
        ],
        borderColor:[
          'rgba(0,0,255,0.5)',
          'rgba(0,255,0,0.5)',
          'rgba(255,0,0,0.5)'
        ],
        
       
        data: [confirmed.value,recovered.value,deaths.value],
      },
   
    
    ]
  };
  
    return(
        <>
        {country==="" ?
        <div style={{maxHeight:"60vh", minWidth:"95vw"}}>
        <Line data={linedata } />        
        </div>
        :
        <div style={{height:"40vh", width:"80vw"}}>
        {global==="" ?  "Loading" : <Bar data={bar } /> }        
        </div>

        }
        </>
    )
}

export default Chart;