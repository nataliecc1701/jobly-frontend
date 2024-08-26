import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const LoginPage = ({ auth, setLoginLoading }) => {
    const navigate = useNavigate();
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
    };
    
    const login = async (formData) => {
        setLoginLoading(true);
        try {
            await auth(formData);
            navigate("/");
        } catch (err) {
            alert(err);
        }
        setLoginLoading(false)
    }
    
    return <form className="LoginPage" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} autoComplete="username" /><br/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} autoComplete="current-password" /><br/>
        <input type="submit" value="Log In" /><br/>
        <Link to="/signup">New user? Create an account</Link>
    </form>
}

export default LoginPage;