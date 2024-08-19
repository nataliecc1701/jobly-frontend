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
                    {company.name} {logo}
                </CardTitle>
                <CardText>
                    {company.description}
                </CardText>
            </CardBody>
        </Card>
    </section>
}

export default CompanyCard;