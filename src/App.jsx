import { use, useState } from 'react';
import { GoogleLogin } from "@react-oauth/google";
import './App.css';

function App() {
   const [count,setcount]= useState(0); 
  return (
    <>
    <div className="login-container">
      
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p>Please login to continue</p>

        <GoogleLogin className='glog'
          onSuccess={(credentialResponse) => {
            console.log("Login Success:", credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
        <div className="divider">OR</div>

        <label className="email">Email</label>
        <input type="text" className="email-box" />
         <br />
        <label className="pass">Password</label>
        <input type="password" className="password-box" />

        <div className="forgot">
          <a href="#">Forgot password?</a>
        </div>
        <button className="btn" onClick={()=>{setcount(count+1)}}>Sign in</button>

        <div className="alredy" >
          <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
       </div>
       <p className='out' >{count}</p>
       </>
  );
}

export default App;