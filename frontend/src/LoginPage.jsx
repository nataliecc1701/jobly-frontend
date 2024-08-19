import React, { useState } from "react"
import { Link } from "react-router-dom"

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData({...formData, [name]: value});
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        login(formData);
    }
    
    return <form className="LoginPage" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} /><br/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} /><br/>
        <input type="submit" value="Log In" /><br/>
        <Link to="/signup">New user? Create an account</Link>
    </form>
}

export default LoginPage;