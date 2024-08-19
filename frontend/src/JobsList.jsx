import React, { useState, useEffect } from "react"
import JoblyApi from "./api";
import Loading from "./Loading";
import JobCard from "./JobCard";

const JobsList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [query, setQuery] = useState({});
    
    useEffect(() => {
        async function listJobs() {
            const res = await JoblyApi.getJobs(query);
            setJobs(res);
            setIsLoading(false);
        }
        
        listJobs()
    }, [query])
    
    if (isLoading) return <Loading />
    
    return <>
        <h2>Displaying {jobs.length} jobs</h2>
        {jobs.map((job) => <JobCard job={job} key={job.id} />)}
    </>
}

export default JobsList;