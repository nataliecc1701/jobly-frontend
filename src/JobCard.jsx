import React, { useContext } from "react"
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

import LoginContext from "./LoginContext";
import JoblyApi from "./api";

const JobCard = ({ job }) => {
    const { user, setCurrentUser } = useContext(LoginContext);
    
    function company() {
        if (job.companyName) return <h4>{job.companyName}</h4>;
        return ""
    }
    
    function salary() {
        if (job.salary) return job.salary
        return "Not Posted"
    }
    
    function equity() {
        if (job.equity) return `Equity: ${job.equity}`
        return ""
    }
    
    function apply() {
        JoblyApi.apply(user.username, job.id)
        const applications = [... user.applications];
        applications.push(job.id);
        setCurrentUser({...user, applications})
    }
    
    function applyButton() {
        if (!user.username) return ""
        
        if (user.applications.includes(job.id)) return <button disabled>Applied</button>
        
        return <button onClick={apply}>Apply</button>
    }
    
    return <section>
        <Card>
            <CardBody>
                <CardTitle>
                    <h3>{job.title}</h3>
                    {company()}
                </CardTitle>
                <CardText>
                    Salary: {salary()}<br/>
                    {equity()}<br/>
                    {applyButton()}
                </CardText>
            </CardBody>
        </Card>
    </section>
}

export default JobCard;