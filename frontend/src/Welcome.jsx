import React from "react"
import { Link } from "react-router-dom"

const Welcome = ({ user }) => {
    if (!("username" in user)) {
        return <div>Welcome to Jobly, powered by React
            <div>
                <Link to="/login">Log in</Link><span> or </span>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>
    }
    return <div>Welcome to Jobly, powered by React
            <div>
                Welcome back, {user.username}
            </div>
        </div>
}

export default Welcome