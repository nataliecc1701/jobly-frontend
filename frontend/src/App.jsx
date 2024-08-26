import { useState } from 'react'
import './App.css'

import Router from './Router'
import Loading from './Loading';
import JoblyApi from './api';

function App() {
  const [user, setUser] = useState({});
  const [loginLoading, setLoginLoading] = useState(false)
  
  async function auth(formData, newUser=false) {
    try {
      let t;
      if (newUser) t = await JoblyApi.registerUser(formData);
      else t = await JoblyApi.getAndSaveToken(formData);
      setUser({token: t, username: formData.username});
    }
    catch (err) {
      console.log(err)
    }
  }
  
  if (loginLoading) return <Loading />
  
  return (
    <div className='app'>
      <Router user={user} auth={auth} setLoginLoading={setLoginLoading} />
    </div>
  )
}

export default App
