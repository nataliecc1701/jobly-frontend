import React, { useState } from "react"

const JobsSearchForm = ({ search, query }) => {
    const [formData, setFormData] = useState({
        minSalary   : 0,
        hasEquity   : false,
        nameLike    : "",
        ...query
    })
    
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData({...formData, [name]: value});
    }
    
    const handleCheckbox = (evt) => {
        const { name, checked } = evt.target;
        setFormData({...formData, [name]: checked})
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        search(formData);
    }
    
    return <form className="CompaniesSearchForm" onSubmit={handleSubmit}>
        <label htmlFor="minSalary">Minimum Salary</label>
        <input name="minSalary" type="number" value={formData.minSalary} onChange={handleChange} /><br/>
        <label htmlFor="hasEquity">Has Equity?</label>
        <input name="hasEquity" type="checkbox" checked={formData.hasEquity} onChange={handleCheckbox} /><br/>
        <label htmlFor="nameLike">Name contains:</label>
        <input name="nameLike" type="text" value={formData.nameLike} onChange={handleChange} />
        <input type="submit" />
    </form>
}

export default JobsSearchForm