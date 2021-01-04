import React, { useEffect, useState } from "react";

import { fetchDaily } from "../Api";
import { Line , Bar } from "react-chartjs-2";

const Chart=()=>{
  let [daily,setDaily]=useState([])
  useEffect(()=>{
    const fetchApi=async ()=>{
      setDaily(await fetchDaily())
    }

    fetchApi()
  },[])
  // console.log(daily)
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

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  
    return(
        <>
        <div style={{height:"40vh", width:"80vw"}}>

        <Line data={linedata }  />
        </div>
        </>
    )
}

export default Chart;