"use client"; 
import {useState,useEffect} from "react"
import Link from "next/link";

export default function Home(){

  const [data,setdata]=useState([])
  //Handle search when ever we searches anything on the search bar of the home page so now write useSate foe it
  const [search,setsearch]=useState("")
  //now write the function to handle search
  function handlesearch(event){
    setsearch(event.target.value)
  }

  //variable to store data of restaurents with filter function
  const filtererd_restaurent=data.filter((res)=>(
     
    res.name.toLowerCase().includes(search) ||
    res.cuisine.toLowerCase().includes(search) ||
    res.rating.toString().includes(search) ||
    res.distance.toString().includes(search)
    
  ))
   
  function handleLoginHome(){
    window.location.href="./Login"

  }
  function handlesignupHome(){
    window.location.href="./signup"

  }
  function handleorder(){
    window.location.href="./OrderNow"
  }
  useEffect(()=>{
    async function getdata() {
      const res=await fetch("https://mocki.io/v1/7dcac9f4-fdb2-4209-bb93-9d3695a45d12")
      const resruarent_data=await res.json()
      setdata(resruarent_data)
    }
    getdata()
  },[])

    return (
      <div>
        <div className="navbar">
          <h2 className="nearbybites">NearBy</h2><img className="image_home" src="https://media.istockphoto.com/id/1443629939/vector/beef-burger-vintage-colorful-emblem.jpg?s=612x612&w=0&k=20&c=eaMP3XhGUUsjsfORzlZt7gftXpJMrHGuYRF7Wl4FdHs="/>
          <div className="searchdiv">
            <img className="searchimg"
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"  alt="search"/>
            <input className="searchbar" type="text" placeholder="Search for restaurent cusine or dish" value={search} onChange={handlesearch}/>
          </div>
          <button className="login_nav" onClick={handleLoginHome}>Login</button>
          <button className="signup_nav" onClick={handlesignupHome}>Sign Up</button>

        </div>
        {filtererd_restaurent.length>0?        
        <div className="restaurent-container">
          {filtererd_restaurent.map((restaurent,id)=>(
            
            <div className="restaurent-card" key={restaurent.id}>
              
              <div className="restaurent-datails">
              <div className="image_div">
              <img className="image_card" src="https://www.shutterstock.com/image-photo/big-assortment-delicious-foods-top-260nw-2469682877.jpg"/>
              </div>
                <p className="detail">Restaurent: {restaurent.name}</p>
                <p className="detail">Cusine: {restaurent.cuisine}</p>
                <p className="detail">Rating: {restaurent.rating}</p>
                <p className="detail">Distance: {restaurent.distance}</p>
                <p className="detail">Phn No: 7893873124</p>
                <button className="order" onClick={handleorder}>Order Now</button>

              </div>
            </div>
          ))}

          </div>:
          <div className="restaurent-container">
          {data.map((restaurent,id)=>(
            
            <div className="restaurent-card" key={restaurent.id}>
              <div className="image_div">
              <img className="image_card" src="https://www.shutterstock.com/image-photo/big-assortment-delicious-foods-top-260nw-2469682877.jpg"/>
              </div>
              <div className="restaurent-datails">
                <p className="name">Restaurent: {restaurent.name}</p>
                <p className="cuisine">Cusine: {restaurent.cuisine}</p>
                <p className="rating">Rating: {restaurent.rating}</p>
                <p className="distance">Distance: {restaurent.distance}</p>
              </div>
            </div>
          ))}
          </div>}
          </div>


      )
}