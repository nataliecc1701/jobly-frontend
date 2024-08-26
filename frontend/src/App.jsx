import { useState, useEffect } from 'react'
import { jwtDecode } from "jwt-decode"
import './App.css'

import Router from './Router'
import Loading from './Loading';
import JoblyApi from './api';
import LoginContext from './LoginContext';
import useLocalState from './useLocalState';

function App() {
  const [token, setToken] = useLocalState("token");
  const [currentUser, setCurrentUser] = useState({});
  const [loginLoading, setLoginLoading] = useState(false);
  
  async function auth(formData, newUser=false) {
    try {
      let t;
      if (newUser) t = await JoblyApi.registerUser(formData);
      else t = await JoblyApi.getAndSaveToken(formData);
      setToken(t);
    }
    catch (err) {
      console.log(err)
    }
  }
  
  useEffect(() => {
    async function updateUser(username) {
      setLoginLoading(true);
      const user = await JoblyApi.getUserData(username);
      setCurrentUser(user);
      setLoginLoading(false);
    }
    
    if (token && token != "null") {
      const decoded = jwtDecode(token)
      if (decoded.username !== currentUser.username) {
        updateUser(decoded.username)
      }
    }
    else setCurrentUser({})
  }, [token])
  
  if (loginLoading) return <Loading />
  
  return (
    <div className='app'>
      <LoginContext.Provider value={{auth, setLoginLoading, user: currentUser}}>
        <Router />
      </LoginContext.Provider>
    </div>
  )
}

export default App
