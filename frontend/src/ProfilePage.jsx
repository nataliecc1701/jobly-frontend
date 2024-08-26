import React, { useState, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import LoginContext from "./LoginContext";
import JoblyApi from "./api";

const ProfilePage = () => {
    const { user } = useContext(LoginContext);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username    : user.username,
        firstName   : user.firstName,
        lastName    : user.lastName,
        email       : user.email,
    })
    
    useEffect(() => {
        if (!user.username) navigate("/login")
    }, [user])
    
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData({...formData, [name]: value});
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        editProfile(formData);
    }
    
    const editProfile = async (formData) => {
        const dataToSend = {... formData};
        const usernameToSend = formData.username;
        
        const user = await JoblyApi.updateUserData(dataToSend, usernameToSend);
        // setCurrentUser(user);
        return user;
    }
    
    return <form className="ProfilePage" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} autoComplete="username" disabled /><br/>
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

export default ProfilePage;