import React, { useState, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import LoginContext from "./LoginContext";

const SignupPage = () => {
    const navigate = useNavigate();
    const {auth, setLoginLoading, user} = useContext(LoginContext)
    const [formData, setFormData] = useState({
        username    : "",
        password    : "",
        firstName   : "",
        lastName    : "",
        email       : "",
    })
    
    useEffect(() => {
        if (user.username) navigate("/profile")
    }, [user])
    
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData({...formData, [name]: value});
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        signup(formData);
    }
    
    const signup = async (formData) => {
        setLoginLoading(true);
        try {
            await auth(formData, true);
            navigate("/");
        } catch (err) {
            alert(err);
        }
        setLoginLoading(false)
    }
    
    return <form className="SignupPage" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} autoComplete="username" /><br/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} autoComplete="new-password" /><br/>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} autoComplete="given-name" /><br/>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} autoComplete="last-name" /><br/>
        <label htmlFor="email">Email Address:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} autoComplete="email" /><br/>
        <input type="submit" value="Register" /><br/>
        <Link to="/login">Already have an account? Log in</Link>
    </form>
}

export default SignupPage;