import React, { useState } from "react"

const CompaniesSearchForm = ({ search, formData, setFormData }) => {
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData({...formData, [name]: value});
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        search(formData);
    }
    
    return <form className="CompaniesSearchForm" onSubmit={handleSubmit}>
        <label htmlFor="minEmployees">Headcount min</label>
        <input name="minEmployees" type="number" value={formData.minEmployees} onChange={handleChange} />
        <label htmlFor="maxEmployees">Max</label>
        <input name="maxEmployees" type="number" value={formData.maxEmployees} onChange={handleChange} /><br/>
        <label htmlFor="nameLike">Name contains:</label>
        <input name="nameLike" type="text" value={formData.nameLike} onChange={handleChange} />
        <input type="submit" />
    </form>
}

export default CompaniesSearchForm