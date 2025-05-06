"use client"
import {useState,useEffect} from "react"
export default function(){
    const [data,setdata]=useState([])
    useEffect(()=>{
        async function getdata() {
            const res=await fetch("https://mocki.io/v1/7d21f7bf-6bf0-42f3-8bca-1b94ae0b15d9")
            const result=await res.json()
            setdata(result)
        }
        getdata()
    },[])
    return (
        <div className="menu">
            {data.map((menu,id)=>(
                <div className="menucard">
                    <div className="menudetails">
                    <span>Item: {menu.name}</span>
                    <br></br>
                    <div>
                    <img className="menuimage" src="https://www.shutterstock.com/image-photo/big-assortment-delicious-foods-top-260nw-2469682877.jpg"/>
                    </div>
                    </div>


                </div>
            ))}

        </div>
    )
}