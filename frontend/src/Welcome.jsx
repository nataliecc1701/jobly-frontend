import React, { useContext } from "react"
import { Link } from "react-router-dom"

import LoginContext from "./LoginContext"

const Welcome = () => {
    const user = useContext(LoginContext);
    
    if (!("username" in user)) {
        return <div>Welcome to Jobly, powered by React
            <div>
                <Link to="/login">Log in</Link><span> or </span>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>
    }
    
    console.log(user);
    return <div>Welcome to Jobly, powered by React
            <div>
                Welcome back, {user.firstName}
            </div>
        </div>
}

export default Welcome