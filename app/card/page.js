"use client"
import {useState,useEffect  } from "react";
export default function card(){
    const [data,setdata]=useState([])
    useEffect(()=>{
        async function getdata() {
            const res=await fetch("https://4eea5d2b-607c-48f0-bf61-19ac4e7b4111.mock.pstmn.io/restaurants")
            const result=await res.json()
            setdata(result)
        }
        getdata()
    },[])
    return(
        <div>
        {data.map((restuarent)=>(
            <div>
            <p>{restuarent.name}</p>
            <p>{restuarent.cusine}</p>
            </div>
        ))}
        </div>
    )
}