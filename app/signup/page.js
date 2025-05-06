// import {useState} from "react"

import Link from "next/link";


export default function SignUp(){
    return(
        <div className="maindiv">
            <h1 className="welcome">Welcome to NearBy<img className="image" src="https://media.istockphoto.com/id/1443629939/vector/beef-burger-vintage-colorful-emblem.jpg?s=612x612&w=0&k=20&c=eaMP3XhGUUsjsfORzlZt7gftXpJMrHGuYRF7Wl4FdHs="/></h1>
            <div className="signupindiv">
                <h1>Sign up</h1>
                <div className="loginattributes">
                <label  htmlFor="emailbox" className="email">Name</label>
                <input className="emailbox" type="text" placeholder="Enter your name"/>
                
                <label htmlFor="emailbox" className="email">Email</label>
                <input id="emailbox" className="emailbox" type="text" placeholder="Enter your email"/>

                <label htmlFor="passbox" className="pass">Password</label>
                <input id="passbox" className="passbox" type="password" placeholder="Create your password"/>
                <p className="remember_signup">Remember Me<input id="text" type="checkbox"/></p>
                <button className="signupbutton2" >
                <Link className="signuplink2" href="Home">sign up</Link>
                </button>
                </div>
            </div>
        </div>
    )
}