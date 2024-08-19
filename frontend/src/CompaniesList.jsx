import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import CompaniesSearchForm from "./CompaniesSearchForm";
import Loading from "./Loading";

const CompaniesList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    const [formData, setFormData] = useState({
        minEmployees: 0,
        maxEmployees: 0,
        nameLike: "",
    });
    
    useEffect(() => {
        async function listCompanies() {
            const res = await JoblyApi.getCompanies();
            setCompanies(res);
            setIsLoading(false);
        }
        
        listCompanies()
    }, [])
    
    function search(formData) {
        async function doSearch(q) {
            setIsLoading(true);
            const res = await JoblyApi.getCompanies(q)
            setCompanies(res);
            setIsLoading(false);
        }
        const q = {}
        if (formData.minEmployees) q.minEmployees = formData.minEmployees;
        if (formData.maxEmployees) q.maxEmployees = formData.maxEmployees;
        if (formData.nameLike) q.name = formData.nameLike;
        doSearch(q);
    }
    
    if (isLoading) return <Loading />
    
    return <>
        <CompaniesSearchForm search={search} formData={formData} setFormData={setFormData} />
        <h2>Displaying {companies.length} companies:</h2>
        {companies.map((company) => <Link key={company.handle} to={`/companies/${company.handle}`} ><CompanyCard company={company} /></Link>)}
    </>
}

export default CompaniesList;