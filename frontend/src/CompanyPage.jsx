import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import JoblyApi from "./api";
import Loading from "./Loading";

const CompanyPage = () => {
    const { id } = useParams();
    let [isLoading, setIsLoading] = useState(true);
    let [company, setCompany] = useState();
    let [errMsg, setErrMsg] = useState(null)
    
    useEffect(() => {
        async function getCompany(id) {
            const res = await JoblyApi.getCompany(id)
            if (res.success) {
                setCompany(res.company);
                setErrMsg(null)
            }
            else {
                setErrMsg(`Error code ${res.status}: ${res.message}`)
            }
            setIsLoading(false);
        }
        
        getCompany(id);
    }, [])
    
    if (isLoading) return <Loading />
    
    if (errMsg) return <div>{errMsg}</div>
    
    return <>
        <h2>{company.name}</h2>
        <div>{company.description}</div>
    </>
}

export default CompanyPage;