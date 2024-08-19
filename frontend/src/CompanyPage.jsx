import React from "react"
import { useParams } from "react-router-dom"

const CompanyPage = () => {
    const { id } = useParams();
    
    return <div>Placeholder company details for {id}</div>
}

export default CompanyPage;