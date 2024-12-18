import React from 'react'
import '../style/LoginLogout.css';
import { useState } from 'react';

 function LoginLogout() {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [isLoading, setIsLoading] = useState(false); 
    const [errorMessage, setErrorMessage] = useState(""); 
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
    const crtUsername = "blackwins";
    const crtPassword = "12345";
  
   
    const handleLogin = (e) => {
      e.preventDefault();
      setIsLoading(true); 
      setErrorMessage(""); 
  
      
      setTimeout(() => {
        if (username === crtUsername && password === crtPassword) {
          setIsLoggedIn(true);
        } else {
          setErrorMessage("Incorrect username or password.");
        }
        setIsLoading(false); 
      }, 1500);
    };
  
   
    const handleLogout = () => {
      setIsLoggedIn(false);
      setUsername("");
      setPassword("");
      setErrorMessage("");
    };
  
    return (
      <div className='container'>
      
        {isLoggedIn ? (
          
          <div>
            <h1>Welcome, {username}!</h1>
            <button  onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          
          <div className='container1'>
            <h2>Login</h2>
            {isLoading ? (
             
              <div ></div>
            ) : (
              <form onSubmit={handleLogin}>
                <div>
                  <label>Username:</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {errorMessage && (
                  <p >{errorMessage}</p>
                )}
                <button type="submit">
                  Login
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    );
  } 

export default LoginLogout;
