import React from "react"
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const CompanyCard = ({ company }) => {
    let logo = ""
    if (company.logo_url) {
        logo = <img src={company.logo} style={{display:"inline-block"}} />
    }
    
    return <section>
        <Card>
            <CardBody>
                <CardTitle>
                    <h3>{company.name}</h3> {logo}
                </CardTitle>
                <CardText>
                    {company.description}
                </CardText>
            </CardBody>
        </Card>
    </section>
}

export default CompanyCard;