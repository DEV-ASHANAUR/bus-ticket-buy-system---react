import { useState,useEffect } from 'react';
import axios from 'axios';


const useFetch = (url) => {
  const Base_url = "http://localhost:8000/api";
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);  
  const [error,setError] = useState(false);


  // const debounce = (func) => {
  //   let timer;
  //   return function (...args){
  //     const context = this;
  //     if(timer) clearTimeout(timer)
  //     timer = setTimeout(()=>{
  //       timer = null
  //       func.apply(context,args);
  //     },500)

  //   }
  // }

  useEffect(()=>{
    const fetchData = async()=>{
        setLoading(true);
        try {
            const res = await axios.get(`${Base_url+url}`);
            setData(res.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }
    fetchData();
  },[url]);

  const reFetch = async()=>{
    setLoading(true);
    try {
        const res = await axios.get(`${Base_url+url}`);
        setData(res.data);
    } catch (error) {
        setError(false);
    }
    setLoading(false);
  }

  return {data,loading,error,reFetch};
};

export default useFetch;