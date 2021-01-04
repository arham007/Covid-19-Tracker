import axios from 'axios';

const url='https://covid19.mathdro.id/api';


export const fetchGlobal=async (country)=>{

    let ChangeableUrl=url;
    if (country){
        ChangeableUrl=`${url}/countries/${country}`
    }





    const {data: {confirmed , recovered , lastUpdate , deaths}}=await axios.get(ChangeableUrl);
    return {confirmed , recovered , lastUpdate , deaths}
}


export const fetchDaily=async ()=>{
    const {data}=await axios.get(`${url}/daily`);
    const modifiedData=data.map((daily)=>({
        confirmed:daily.confirmed.total,
        deaths:daily.deaths.total,
        date:daily.reportDate

    }))
    return modifiedData
}

export const fetchCountry=async ()=>{
    const {data : {countries}}=await axios.get(`${url}/countries`);
    return countries

}