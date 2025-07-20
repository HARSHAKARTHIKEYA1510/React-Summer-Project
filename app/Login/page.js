"use client";  // <-- Add this line at the top of the file

import {useState} from "react"
import Link from "next/link";
import { signInWithGoogle } from "../../lib/auth";
import { useRouter } from "next/navigation";


export default function Login(){
    const [username,setUsername]=useState("")
    const [password,setpassword]=useState("")
    const [invaild,setinvalid]=useState("")
    const [error, setError] = useState(null);
    const router = useRouter();

    async function handleGoogle() {
        setError('')
        try {
        await signInWithGoogle();
        router.push('/Home')
        } catch(err) {
            setError(err)
        }
    }


    function handleusername(event){
        setUsername(event.target.value)
    }
    function handlepassword(event){
        setpassword(event.target.value)
    }

    function handlelogin(){
        const email=username.trim()
        if (email=="user@gmail.com" && password=="12345"){
            window.location.href="./Home"
        }else{
            setinvalid("Invaild credential. Please try again")
        }
    }

    return(
        <div className="maindiv">
            <h1 className="welcome">Welcome back to NearBy<img className="image" src="https://media.istockphoto.com/id/1443629939/vector/beef-burger-vintage-colorful-emblem.jpg?s=612x612&w=0&k=20&c=eaMP3XhGUUsjsfORzlZt7gftXpJMrHGuYRF7Wl4FdHs="/></h1>
            <div className="logindiv">
                <h1 className="login">Login</h1>
                <div className="loginattributes">
                <label className="email">Email</label>
                <input className="emailbox" type="text" placeholder="Enter your email" onChange={handleusername} value={username}/>
                <label className="pass">Password</label>
                <input className="passbox" type="password" placeholder="Enter your password" onChange={handlepassword} value={password}/>
                <p className="forgotpass">Forgot password?</p>
                <p className="remember">Remember Me<input id="text" type="checkbox"/></p>
                
                <button className="signinbutton1" onClick={handlelogin}>signin</button>
                <div className="googlediv">
                <img className="googleimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"/>
                <span onClick={handleGoogle} className="google">Continue with google</span>
                </div>
                {invaild && <p style={{color:"red",marginTop:"10px"}}>{invaild}</p>}
                <p className={invaild?"newbites1":"newbites"} >New to NearByBites? 
                    <Link className="signupbutton" href="signup">sign Up</Link>
                </p>

                </div>
            </div>
        </div>
    )
}