import axios from 'axios';

const url='https://covid19.mathdro.id/api';


export const fetchGlobal=async ()=>{
    const {data: {confirmed , recovered , lastUpdate , deaths}}=await axios.get(url);
    return {confirmed , recovered , lastUpdate , deaths}
}