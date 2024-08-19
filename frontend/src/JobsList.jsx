import React, { useState, useEffect } from "react"
import JoblyApi from "./api";
import Loading from "./Loading";
import JobCard from "./JobCard";
import JobsSearchForm from "./JobsSearchForm";

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
    
    function search(formData) {
        const q = {}
        for (const key of Object.keys(formData)) {
            if (formData[key]) {
                if (key !== "nameLike") q[key] = formData[key];
                else q.name = formData.nameLike;
            }
        }
        
        setIsLoading(true);
        setQuery(q);
    }
    
    if (isLoading) return <Loading />
    
    return <>
        <JobsSearchForm search={search} query={query} />
        <h2>Displaying {jobs.length} jobs</h2>
        {jobs.map((job) => <JobCard job={job} key={job.id} />)}
    </>
}

export default JobsList;