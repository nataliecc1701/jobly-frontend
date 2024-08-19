import React from "react"
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const JobCard = ({ job }) => {
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
    
    console.log(job)
    
    return <section>
        <Card>
            <CardBody>
                <CardTitle>
                    <h3>{job.title}</h3>
                    {company()}
                </CardTitle>
                <CardText>
                    Salary: {salary()}<br/>
                    {equity()}
                </CardText>
            </CardBody>
        </Card>
    </section>
}

export default JobCard;