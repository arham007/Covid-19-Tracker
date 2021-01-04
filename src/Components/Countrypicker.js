import React,{useEffect, useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import { NativeSelect } from '@material-ui/core';
import { fetchCountry } from '../Api';




const Countrypicker=({handleChange})=>{
    console.log(handleChange)
    const [country,setCountry]=useState([])
    useEffect(()=>{
        async function fetchApi(){
            setCountry(await fetchCountry())

        }
        fetchApi()
    },[])

   
    return(
        <>
        
        <FormControl style={{width:"20%"}}>
      
        <NativeSelect onChange={(e)=>{handleChange(e.target.value)}} >
          <option value="Global">Global</option>
          {country.map((country,i)=>{
              return(

                  <option key={i} value={country.name}>{country.name}</option>
              )
          })}
          
        
        </NativeSelect>
      </FormControl>
        </>
    )
}

export default Countrypicker;