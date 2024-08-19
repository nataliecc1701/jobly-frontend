import React, { useState, useEffect } from "react";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";

const CompaniesList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([])
    
    useEffect(() => {
        async function listCompanies() {
            const res = await JoblyApi.getCompanies();
            setCompanies(res);
            setIsLoading(false);
        }
        
        listCompanies()
    }, [])
    
    if (isLoading) return <div>Loading...</div>
    
    return <>
        {companies.map((company) => <CompanyCard company={company} key={company.handle} />)}
    </>
}

export default CompaniesList;